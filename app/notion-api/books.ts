import { Client } from '@notionhq/client';
import { BooksProperties, Status } from '~/types/notion/books';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const BOOKS_DATABASE_ID = '9442969405fa49c4800f9523cde7a906';

async function fetchBooksDatabase() {
  return await notion.databases.query({
    database_id: BOOKS_DATABASE_ID,
    filter: {
      and: [
        getPropertyStatusFilter(),
        {
          property: BooksProperties.Slug,
          select: {
            is_not_empty: true,
          },
        },
      ],
    },
  });
}

async function fetchBookByPageId(pageId: string) {
  return await notion.pages.retrieve({ page_id: pageId });
}

async function fetchBookBlocks(pageBlockId: string) {
  return await notion.blocks.children.list({
    block_id: pageBlockId,
  });
}

function getPropertyStatusFilter() {
  return process.env.NODE_ENV === 'development'
    ? {
        or: [
          {
            property: BooksProperties.Status,
            select: {
              equals: Status.Published,
            },
          },
          {
            property: BooksProperties.Status,
            select: {
              equals: Status.Draft,
            },
          },
        ],
      }
    : {
        property: BooksProperties.Status,
        select: {
          equals: Status.Published,
        },
      };
}

export { fetchBooksDatabase, fetchBookByPageId, fetchBookBlocks };
