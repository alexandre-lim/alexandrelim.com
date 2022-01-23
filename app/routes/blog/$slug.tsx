import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';

import { ROUTES } from '~/routes';
import { LinkArrowLeft } from '~/components/LinkArrowLeft';
import { QueryDatabaseResponseListResults } from '~/types/notion/queryDatabaseResponseListResults';
import { ListBlockChildrenResponseResults } from '~/types/notion/listBlockChildrenResponseResults';
import { fetchBlogArticleBlocks, fetchBlogDatabaseBySlug } from '~/notion-api/blog';
import { ArticlesData } from '~/types/notion/blog';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug');

  const { slug } = params;

  const blogDatabaseQueryResponse = await fetchBlogDatabaseBySlug(slug);

  const articlesResults = blogDatabaseQueryResponse.results as QueryDatabaseResponseListResults;

  const articlesData = articlesResults.map((articlesResult) => {
    const { Published, Edited, Tags, Summary, Slug, Title } = articlesResult.properties;
    return { id: articlesResult.id, properties: { Published, Edited, Tags, Summary, Slug, Title } };
  });

  const pageBlockId = articlesData[0].id;
  const listBlockChildrenResponse = await fetchBlogArticleBlocks(pageBlockId);

  const blockResults = listBlockChildrenResponse.results as ListBlockChildrenResponseResults;

  return [articlesData, blockResults];
};

export default function ArticleSlug() {
  const [articlesData, blockResults]: [Array<ArticlesData>, ListBlockChildrenResponseResults] = useLoaderData();

  const [articleTitle] = articlesData.map((data) => {
    const { properties } = data;

    if (properties.Title.title[0]?.type === 'text') {
      return properties.Title.title[0].text.content;
    }

    return '';
  });

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
