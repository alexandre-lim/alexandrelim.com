import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';

import { ROUTES } from '~/routes';
import { LinkArrowLeft } from '~/components/LinkArrowLeft';
import { LastUpdated } from '~/components/LastUpdated';
import { ListBlockChildrenResponseResults } from '~/types/notion/listBlockChildrenResponseResults';
import { fetchCourseBlocks, fetchCourseByPageId } from '~/notion-api/courses';
import { parseNotionBlockResults } from '~/notion-api/parseNotionBlockResults';
import { CourseProperties } from '~/types/notion/courses';
import { GetPageResponse } from '~/types/notion/GetPageResponse';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug');

  const { slug } = params;
  const UUID_LENGTH = 36;

  const pageId = slug.slice(slug.length - UUID_LENGTH);

  try {
    const pageResponse = (await fetchCourseByPageId(pageId)) as GetPageResponse;

    const { Published, Edited, Tags, Slug, Title, Author, Year_Formation } = pageResponse.properties;

    const courseData = {
      properties: { Published, Edited, Tags, Slug, Title, Author, Year_Formation },
    } as CourseProperties;

    const listBlockChildrenResponse = await fetchCourseBlocks(pageId);

    const blockResults = listBlockChildrenResponse.results as ListBlockChildrenResponseResults;

    return [courseData, blockResults];
  } catch (error) {
    throw new Response('Not Found', {
      status: 404,
    });
  }
};

export default function ArticleSlug() {
  const [courseData, blockResults]: [CourseProperties, ListBlockChildrenResponseResults] = useLoaderData();

  const author = courseData.properties.Author.select?.name;
  let courseTitle = '';

  if (courseData.properties.Title.title[0]?.type === 'text') {
    courseTitle = courseData.properties.Title.title[0].text.content;
  }

  const blocks = parseNotionBlockResults(blockResults);

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 inline-block">
          <LinkArrowLeft to={ROUTES.courses} text={'Back to course notes'} />
        </div>

        <h2 className="flex flex-col gap-2 text-center">
          <span className="text-xl md:text-4xl font-recursive-bold font-recursive-semi-casual">{courseTitle}</span>
          <span className="text-lg">By&nbsp;{author}</span>
        </h2>

        <article className="mt-16 flex flex-col gap-8">
          {...blocks}
          <LastUpdated titleTag="h4" edited={courseData.properties.Edited.last_edited_time}></LastUpdated>
        </article>
      </div>
    </>
  );
}
