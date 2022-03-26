import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';
import type { ListBlockChildrenResponse, GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

import { ROUTES } from '~/routes';
import { LinkArrowLeft } from '~/components/LinkArrowLeft';
import { LastUpdated } from '~/components/LastUpdated';
import { fetchBookBlocks, fetchBookByPageId } from '~/notion-api/books';
import { parseNotionBlockResults } from '~/notion-api/parseNotionBlockResults';
import { BookProperties } from '~/types/notion/books';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug');

  const { slug } = params;
  const UUID_LENGTH = 36;

  const pageId = slug.slice(slug.length - UUID_LENGTH);

  try {
    const pageResponse = (await fetchBookByPageId(pageId)) as Extract<
      GetPageResponse,
      { properties: Record<string, unknown> }
    >;

    const { Published, Edited, Tags, Slug, Title, Author } = pageResponse.properties;

    const bookData = { properties: { Published, Edited, Tags, Slug, Title, Author } } as BookProperties;

    const listBlockChildrenResponse = await fetchBookBlocks(pageId);

    return [bookData, listBlockChildrenResponse];
  } catch (error) {
    throw new Response('Not Found', {
      status: 404,
    });
  }
};

export default function ArticleSlug() {
  const [bookData, listBlockChildrenResponse]: [BookProperties, ListBlockChildrenResponse] = useLoaderData();

  const author = bookData.properties.Author.select?.name;
  let bookTitle = '';

  if (bookData.properties.Title.title[0]?.type === 'text') {
    bookTitle = bookData.properties.Title.title[0].text.content;
  }

  const blocks = parseNotionBlockResults(listBlockChildrenResponse);

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 inline-block">
          <LinkArrowLeft to={ROUTES.books} text={'Back to book notes'} />
        </div>

        <h2 className="flex flex-col gap-2 text-center">
          <span className="text-xl md:text-4xl font-recursive-bold font-recursive-semi-casual">{bookTitle}</span>
          <span className="text-lg">By&nbsp;{author}</span>
        </h2>

        <article className="mt-16 flex flex-col gap-8">
          {...blocks}
          <LastUpdated titleTag="h4" edited={bookData.properties.Edited.last_edited_time}></LastUpdated>
        </article>
      </div>
    </>
  );
}
