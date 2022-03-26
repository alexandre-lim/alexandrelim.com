import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';
import type { ListBlockChildrenResponse, GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

import { ROUTES } from '~/routes';
import { LinkArrowLeft } from '~/components/LinkArrowLeft';
import { fetchBlogArticleBlocks, fetchBlogArticleByPageId } from '~/notion-api/blog';
import { ArticleProperties } from '~/types/notion/blog';
import { parseNotionBlockResults } from '~/notion-api/parseNotionBlockResults';
import { LastUpdated } from '~/components/LastUpdated';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug');

  const { slug } = params;
  const UUID_LENGTH = 36;

  const pageId = slug.slice(slug.length - UUID_LENGTH);

  try {
    const pageResponse = (await fetchBlogArticleByPageId(pageId)) as Extract<
      GetPageResponse,
      { properties: Record<string, unknown> }
    >;

    const { Published, Edited, Tags, Summary, Slug, Title } = pageResponse.properties;

    const articleData = { properties: { Published, Edited, Tags, Summary, Slug, Title } } as ArticleProperties;

    const listBlockChildrenResponse = await fetchBlogArticleBlocks(pageId);

    return [articleData, listBlockChildrenResponse];
  } catch (error) {
    throw new Response('Not Found', {
      status: 404,
    });
  }
};

export default function ArticleSlug() {
  const [articleData, listBlockChildrenResponse]: [ArticleProperties, ListBlockChildrenResponse] = useLoaderData();

  let articleTitle = '';

  if (articleData.properties.Title.title[0]?.type === 'text') {
    articleTitle = articleData.properties.Title.title[0].text.content;
  }

  const blocks = parseNotionBlockResults(listBlockChildrenResponse);

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 inline-block">
          <LinkArrowLeft to={ROUTES.blog} text={'Back to articles'} />
        </div>

        <h2 className="text-xl md:text-4xl text-center font-recursive-bold font-recursive-semi-casual">
          {articleTitle}
        </h2>

        <article className="mt-16 flex flex-col gap-8">
          {...blocks}
          <LastUpdated titleTag="h4" edited={articleData.properties.Edited.last_edited_time}></LastUpdated>
        </article>
      </div>
    </>
  );
}
