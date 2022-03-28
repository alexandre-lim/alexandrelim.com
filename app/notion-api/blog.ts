import { Client } from '@notionhq/client';
import { BlogProperties, Status } from '~/types/notion/blog';
import { fetchBlocks } from './common';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const BLOG_DATABASE_ID = '38ca841b0dbe4688acbdc215c1d96780';

async function fetchBlogDatabase() {
  return await notion.databases.query({
    database_id: BLOG_DATABASE_ID,
    filter: {
      and: [
        getPropertyStatusFilter(),
        {
          property: BlogProperties.Slug,
          select: {
            is_not_empty: true,
          },
        },
      ],
    },
  });
}

async function fetchBlogArticleByPageId(pageId: string) {
  return await notion.pages.retrieve({ page_id: pageId });
}

function fetchBlogArticleBlocks(pageBlockId: string) {
  return fetchBlocks(pageBlockId);
}

function getPropertyStatusFilter() {
  return process.env.NODE_ENV === 'development'
    ? {
        or: [
          {
            property: BlogProperties.Status,
            select: {
              equals: Status.Published,
            },
          },
          {
            property: BlogProperties.Status,
            select: {
              equals: Status.Draft,
            },
          },
        ],
      }
    : {
        property: BlogProperties.Status,
        select: {
          equals: Status.Published,
        },
      };
}

export { fetchBlogDatabase, fetchBlogArticleByPageId, fetchBlogArticleBlocks };
