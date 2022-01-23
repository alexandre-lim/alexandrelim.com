import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import { ROUTES } from '~/routes';
import { PageSeparator } from '~/components/PageSeparator';
import { ArticleCard, ArticleHeaderTag } from '~/components/ArticleCard';
import { QueryDatabaseResponseListResults } from '~/types/notion/queryDatabaseResponseListResults';
import { fetchBlogDatabase } from '~/notion-api/blog';
import { ArticlesData } from '~/types/notion/blog';

export const loader: LoaderFunction = async () => {
  const blogDatabaseQueryResponse = await fetchBlogDatabase();

  const results = blogDatabaseQueryResponse.results as QueryDatabaseResponseListResults;

  return results.map((result) => {
    const { Published, Edited, Tags, Summary, Slug, Title } = result.properties;
    return { id: result.id, properties: { Published, Edited, Tags, Summary, Slug, Title } };
  });
};

export default function Index() {
  const articlesData: Array<ArticlesData> = useLoaderData();

  const articles = articlesData.map((data) => {
    const { id, properties } = data;
    const slug = properties.Slug.select?.name;
    let title = '';
    let summary = '';

    if (properties.Title.title[0]?.type === 'text') {
      title = properties.Title.title[0].text.content;
    }

    if (properties.Summary.rich_text[0]?.type === 'text') {
      summary = properties.Summary.rich_text[0].text.content;
    }

    return (
      <ArticleCard
        key={id}
        to={`${ROUTES.blog}/${slug}`}
        headerTag={ArticleHeaderTag.h2}
        title={title}
        arrowText="Read More"
        summary={summary}
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

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8">{articles}</div>
    </>
  );
}
