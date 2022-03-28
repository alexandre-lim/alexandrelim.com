import { Client } from '@notionhq/client';
import { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function fetchBlocks(blockId: string) {
  const pageBlocks: Array<ListBlockChildrenResponse> = [];
  let startCursor: undefined | string = undefined;

  do {
    const blocks: ListBlockChildrenResponse = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: startCursor,
    });

    if (blocks.has_more && blocks.next_cursor) {
      startCursor = blocks.next_cursor;
    } else {
      startCursor = undefined;
    }

    pageBlocks.push(blocks);
  } while (startCursor);

  return pageBlocks;
}
