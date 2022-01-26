import { Client } from '@notionhq/client';
import { BlogProperties, Status } from '~/types/notion/blog';

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

async function fetchBlogDatabaseBySlug(slug: string) {
  return await notion.databases.query({
    database_id: BLOG_DATABASE_ID,
    filter: {
      and: [
        getPropertyStatusFilter(),
        {
          property: BlogProperties.Slug,
          select: {
            equals: slug,
          },
        },
      ],
    },
    page_size: 1,
  });
}

async function fetchBlogArticleBlocks(pageBlockId: string) {
  return await notion.blocks.children.list({
    block_id: pageBlockId,
  });
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

export { fetchBlogDatabase, fetchBlogDatabaseBySlug, fetchBlogArticleBlocks };
