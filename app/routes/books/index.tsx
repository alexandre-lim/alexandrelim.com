import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import { ROUTES } from '~/routes';
import { PageSeparator } from '~/components/PageSeparator';
import { BookCardDetail } from '~/components/BookCardDetail';
import { LinkExternal } from '~/components/LinkExternal';

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
      <div className="max-w-2xl mx-auto mb-12 text-justify">
        <p>
          I mostly read nonfiction books. I'm taking notes to fight{' '}
          <LinkExternal href="https://en.wikipedia.org/wiki/Forgetting_curve">the forgetting curve</LinkExternal> and
          review them once in a while. I'm sharing them publicly as it may be helpful to someone. But{' '}
          <strong>my notes are not a summary of the book.</strong> If you find them interesting, I encourage you to read
          the whole book.
        </p>
      </div>

      <PageSeparator />

      <div className="flex flex-col gap-8">{books}</div>
    </>
  );
}
