import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';

import { ROUTES } from '~/routes';
import { LinkArrowLeft } from '~/components/LinkArrowLeft';
import { ListBlockChildrenResponseResults } from '~/types/notion/listBlockChildrenResponseResults';
import { fetchBookBlocks, fetchBookByPageId } from '~/notion-api/books';
import { BookProperties } from '~/types/notion/books';
import { GetPageResponse } from '~/types/notion/GetPageResponse';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug');

  const { slug } = params;
  const UUID_LENGTH = 36;

  const pageId = slug.slice(slug.length - UUID_LENGTH);

  try {
    const pageResponse = (await fetchBookByPageId(pageId)) as GetPageResponse;

    const { Published, Edited, Tags, Slug, Title, Author } = pageResponse.properties;

    const bookData = { properties: { Published, Edited, Tags, Slug, Title, Author } } as BookProperties;

    const listBlockChildrenResponse = await fetchBookBlocks(pageId);

    const blockResults = listBlockChildrenResponse.results as ListBlockChildrenResponseResults;

    return [bookData, blockResults];
  } catch (error) {
    throw new Response('Not Found', {
      status: 404,
    });
  }
};

export default function ArticleSlug() {
  const [bookData, blockResults]: [BookProperties, ListBlockChildrenResponseResults] = useLoaderData();

  const author = bookData.properties.Author.select?.name;
  let bookTitle = '';

  if (bookData.properties.Title.title[0]?.type === 'text') {
    bookTitle = bookData.properties.Title.title[0].text.content;
  }

  const blocks = blockResults.map((block, index) => {
    const { id, type } = block;

    const result = [];

    if (type === 'heading_1') {
      result.push(
        <h3 key={`${id}_${index}`} className="text-xl md:text-2xl font-recursive-semibold font-recursive-semi-casual">
          {block.heading_1.text[0].plain_text}
        </h3>,
      );
    }

    if (type === 'heading_2') {
      result.push(
        <h3 key={`${id}_${index}`} className="text-xl md:text-2xl font-recursive-semibold font-recursive-semi-casual">
          {block.heading_2.text[0].plain_text}
        </h3>,
      );
    }

    if (type === 'heading_3') {
      result.push(
        <h3 key={`${id}_${index}`} className="text-xl md:text-2xl font-recursive-semibold font-recursive-semi-casual">
          {block.heading_3.text[0].plain_text}
        </h3>,
      );
    }

    if (type === 'paragraph' && block.paragraph.text.length > 0 && block.paragraph.text[0].type === 'text') {
      result.push(<p key={`${id}_${index}`}>{block.paragraph.text[0].text.content}</p>);
    }

    return result;
  });

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

        <article className="mt-16 flex flex-col gap-8">{...blocks}</article>
      </div>
    </>
  );
}
