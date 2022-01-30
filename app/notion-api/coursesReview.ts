import { Client } from '@notionhq/client';
import { CoursesReviewProperties, Status } from '~/types/notion/coursesReview';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const COURSES_REVIEW_DATABASE_ID = '3eacb9cf91ec4dbf81b2d866d98b27fc';

async function fetchCoursesReviewDatabase() {
  return await notion.databases.query({
    database_id: COURSES_REVIEW_DATABASE_ID,
    filter: {
      and: [
        getPropertyStatusFilter(),
        {
          property: CoursesReviewProperties.Slug,
          select: {
            is_not_empty: true,
          },
        },
      ],
    },
  });
}

async function fetchCourseReviewByPageId(pageId: string) {
  return await notion.pages.retrieve({ page_id: pageId });
}

async function fetchCourseReviewBlocks(pageBlockId: string) {
  return await notion.blocks.children.list({
    block_id: pageBlockId,
  });
}

function getPropertyStatusFilter() {
  return process.env.NODE_ENV === 'development'
    ? {
        or: [
          {
            property: CoursesReviewProperties.Status,
            select: {
              equals: Status.Published,
            },
          },
          {
            property: CoursesReviewProperties.Status,
            select: {
              equals: Status.Draft,
            },
          },
        ],
      }
    : {
        property: CoursesReviewProperties.Status,
        select: {
          equals: Status.Published,
        },
      };
}

export { fetchCoursesReviewDatabase, fetchCourseReviewByPageId, fetchCourseReviewBlocks };
