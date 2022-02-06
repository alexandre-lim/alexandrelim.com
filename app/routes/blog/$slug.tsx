import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';

import { ROUTES } from '~/routes';
import { LinkArrowLeft } from '~/components/LinkArrowLeft';
import { ListBlockChildrenResponseResults } from '~/types/notion/listBlockChildrenResponseResults';
import { fetchBlogArticleBlocks, fetchBlogArticleByPageId } from '~/notion-api/blog';
import { ArticleProperties } from '~/types/notion/blog';
import { GetPageResponse } from '~/types/notion/GetPageResponse';
import { parseBlogNotionBlockResults } from '~/notion-api/parseBlogNotionBlockResults';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug');

  const { slug } = params;
  const UUID_LENGTH = 36;

  const pageId = slug.slice(slug.length - UUID_LENGTH);

  try {
    const pageResponse = (await fetchBlogArticleByPageId(pageId)) as GetPageResponse;

    const { Published, Edited, Tags, Summary, Slug, Title } = pageResponse.properties;

    const articleData = { properties: { Published, Edited, Tags, Summary, Slug, Title } } as ArticleProperties;

    const listBlockChildrenResponse = await fetchBlogArticleBlocks(pageId);

    const blockResults = listBlockChildrenResponse.results as ListBlockChildrenResponseResults;

    return [articleData, blockResults];
  } catch (error) {
    throw new Response('Not Found', {
      status: 404,
    });
  }
};

export default function ArticleSlug() {
  const [articleData, blockResults]: [ArticleProperties, ListBlockChildrenResponseResults] = useLoaderData();

  let articleTitle = '';

  if (articleData.properties.Title.title[0]?.type === 'text') {
    articleTitle = articleData.properties.Title.title[0].text.content;
  }

  const blocks = parseBlogNotionBlockResults(blockResults);

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 inline-block">
          <LinkArrowLeft to={ROUTES.blog} text={'Back to articles'} />
        </div>

        <h2 className="text-xl md:text-4xl text-center font-recursive-bold font-recursive-semi-casual">
          {articleTitle}
        </h2>

        <article className="mt-16 flex flex-col gap-8">{...blocks}</article>
      </div>
    </>
  );
}
