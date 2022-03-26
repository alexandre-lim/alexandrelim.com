import { LoaderFunction, useLoaderData } from 'remix';

import { ROUTES } from '~/routes';
import { PageSeparator } from '~/components/PageSeparator';
import { CourseDetailCard } from '~/components/CourseDetailCard';
import { fetchCoursesDatabase } from '~/notion-api/courses';
import { CoursesData } from '~/types/notion/courses';

export const loader: LoaderFunction = async () => {
  const coursesDatabaseQueryResponse = await fetchCoursesDatabase();

  const results = coursesDatabaseQueryResponse.results;

  return results.map((partialResult) => {
    const result = partialResult as Extract<typeof partialResult, { properties: Record<string, unknown> }>;

    const { Published, Edited, Tags, Summary, Slug, Title, Author, Cover, Year_Formation, Cover_Alternative } =
      result.properties;

    return {
      id: result.id,
      properties: { Published, Edited, Tags, Summary, Slug, Title, Author, Cover, Year_Formation, Cover_Alternative },
    };
  });
};

export default function Courses() {
  const coursesData: Array<CoursesData> = useLoaderData();

  const courses = coursesData.map((course) => {
    const { id, properties } = course;
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
      <CourseDetailCard
        key={id}
        to={`${ROUTES.courses}/${slug}-${id}`}
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
      <div className="max-w-2xl mx-auto mb-12 text-justify">
        <p className="mb-4">
          As a professional, it's <strong>my responsibility to invest in my craft.</strong> But I also enjoy taking
          lessons not related to my field, like The Marketing Seminar from Seth Godin.
        </p>
        <p>
          You'll find some notes of the courses I took, and if it sparks your interest, you might want to give it a try.
          But I suggest you do some research before and prepare yourself.{' '}
          <strong>The real difficulty is finishing a course and leveraging what you learn to benefit your life.</strong>
        </p>
      </div>

      <PageSeparator />

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8">
        {courses}
      </div>
    </>
  );
}
