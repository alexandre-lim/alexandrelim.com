import { Client } from '@notionhq/client';
import { CoursesProperties, Status } from '~/types/notion/courses';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const COURSES_DATABASE_ID = '3eacb9cf91ec4dbf81b2d866d98b27fc';

async function fetchCoursesDatabase() {
  return await notion.databases.query({
    database_id: COURSES_DATABASE_ID,
    filter: {
      and: [
        getPropertyStatusFilter(),
        {
          property: CoursesProperties.Slug,
          select: {
            is_not_empty: true,
          },
        },
      ],
    },
  });
}

async function fetchCourseByPageId(pageId: string) {
  return await notion.pages.retrieve({ page_id: pageId });
}

async function fetchCourseBlocks(pageBlockId: string) {
  return await notion.blocks.children.list({
    block_id: pageBlockId,
  });
}

function getPropertyStatusFilter() {
  return process.env.NODE_ENV === 'development'
    ? {
        or: [
          {
            property: CoursesProperties.Status,
            select: {
              equals: Status.Published,
            },
          },
          {
            property: CoursesProperties.Status,
            select: {
              equals: Status.Draft,
            },
          },
        ],
      }
    : {
        property: CoursesProperties.Status,
        select: {
          equals: Status.Published,
        },
      };
}

export { fetchCoursesDatabase, fetchCourseByPageId, fetchCourseBlocks };
