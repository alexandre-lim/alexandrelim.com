import { LoaderFunction, useLoaderData } from 'remix';

import { ROUTES } from '~/routes';
import { PageSeparator } from '~/components/PageSeparator';
import { CourseReviewDetailCard } from '~/components/CourseReviewDetailCard';
import { fetchCoursesReviewDatabase } from '~/notion-api/coursesReview';
import { QueryDatabaseResponseListResults } from '~/types/notion/queryDatabaseResponseListResults';
import { CoursesReviewData } from '~/types/notion/coursesReview';

export const loader: LoaderFunction = async () => {
  const coursesReviewDatabaseQueryResponse = await fetchCoursesReviewDatabase();

  const results = coursesReviewDatabaseQueryResponse.results as QueryDatabaseResponseListResults;

  return results.map((result) => {
    const { Published, Edited, Tags, Summary, Slug, Title, Author, Cover, Year_Formation, Cover_Alternative } =
      result.properties;
    return {
      id: result.id,
      properties: { Published, Edited, Tags, Summary, Slug, Title, Author, Cover, Year_Formation, Cover_Alternative },
    };
  });
};

export default function CoursesReview() {
  const coursesReviewData: Array<CoursesReviewData> = useLoaderData();

  const coursesReview = coursesReviewData.map((courseReview) => {
    const { id, properties } = courseReview;
    const slug = properties.Slug.select?.name;
    const author = properties.Author.select?.name || '';

    let title = '';
    let summary = '';
    let coverAlternative = '';
    let imgSrc = '';

    if (properties.Title.title[0]?.type === 'text') {
      title = properties.Title.title[0].text.content;
    }

    if (properties.Summary.rich_text[0]?.type === 'text') {
      summary = properties.Summary.rich_text[0].text.content;
    }

    if (properties.Cover_Alternative.rich_text[0]?.type === 'text') {
      coverAlternative = properties.Cover_Alternative.rich_text[0].text.content;
    }

    if (properties.Cover.files[0]?.type === 'file') {
      imgSrc = properties.Cover.files[0].file.url;
    }

    return (
      <CourseReviewDetailCard
        key={id}
        to={`${ROUTES.coursesReview}/${slug}-${id}`}
        title={title}
        author={author}
        imgSrc={imgSrc}
        imgAlt={coverAlternative}
        description={summary}
      />
    );
  });

  return (
    <>
      <div className="max-w-2xl mx-auto mb-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>

      <PageSeparator />

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8">
        {coursesReview}
      </div>
    </>
  );
}
