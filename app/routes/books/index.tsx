import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import { ROUTES } from '~/routes';
import { PageSeparator } from '~/components/PageSeparator';
import { BookCardDetail } from '~/components/BookCardDetail';

import { fetchBooksDatabase } from '~/notion-api/books';
import { QueryDatabaseResponseListResults } from '~/types/notion/queryDatabaseResponseListResults';
import { BooksData } from '~/types/notion/books';

export const loader: LoaderFunction = async () => {
  const booksDatabaseQueryResponse = await fetchBooksDatabase();

  const results = booksDatabaseQueryResponse.results as QueryDatabaseResponseListResults;

  return results.map((result) => {
    const { Published, Edited, Tags, Summary, Slug, Title, Author, Cover } = result.properties;
    return { id: result.id, properties: { Published, Edited, Tags, Summary, Slug, Title, Author, Cover } };
  });
};

export default function Books() {
  const booksData: Array<BooksData> = useLoaderData();

  const books = booksData.map((book) => {
    const { id, properties } = book;
    const slug = properties.Slug.select?.name;
    const author = properties.Author.select?.name || '';

    let title = '';
    let summary = '';
    let imgSrc = '';

    if (properties.Title.title[0]?.type === 'text') {
      title = properties.Title.title[0].text.content;
    }

    if (properties.Summary.rich_text[0]?.type === 'text') {
      summary = properties.Summary.rich_text[0].text.content;
    }

    if (properties.Cover.files[0]?.type === 'file') {
      imgSrc = properties.Cover.files[0].file.url;
    }

    return (
      <BookCardDetail
        key={id}
        to={`${ROUTES.books}/${slug}-${id}`}
        title={title}
        author={author}
        imgSrc={imgSrc}
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

      <div className="flex flex-col gap-8">{books}</div>
    </>
  );
}
