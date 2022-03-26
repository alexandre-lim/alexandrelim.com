import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import { ROUTES } from '~/routes';
import { PageSeparator } from '~/components/PageSeparator';
import { ArticleCard, ArticleHeaderTag } from '~/components/ArticleCard';
import { fetchBlogDatabase } from '~/notion-api/blog';
import { ArticlesData } from '~/types/notion/blog';

export const loader: LoaderFunction = async () => {
  const blogDatabaseQueryResponse = await fetchBlogDatabase();

  const results = blogDatabaseQueryResponse.results;

  return results.map((partialResult) => {
    const result = partialResult as Extract<typeof partialResult, { properties: Record<string, unknown> }>;

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
        to={`${ROUTES.blog}/${slug}-${id}`}
        headerTag={ArticleHeaderTag.h2}
        title={title}
        arrowText="Read More"
        summary={summary}
      />
    );
  });

  return (
    <>
      <div className="max-w-2xl mx-auto mb-12 text-justify">
        <p>
          I write to balance all the learning and the constant chatting in my mind. It helps clear my mind. It's also a
          way to <strong>apply what I learned and gain retention.</strong> I write for me, my future me, and people who
          can benefit from it.
        </p>
      </div>

      <PageSeparator />

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8">
        {articles}
      </div>
    </>
  );
}
