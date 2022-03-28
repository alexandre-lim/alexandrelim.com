import clsx from 'clsx';
import { Language } from 'prism-react-renderer';
import type { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints';

import { ImageContent } from '~/components/ImageContent';
import { LinkExternal } from '~/components/LinkExternal';
import { CodeBlock } from '~/components/CodeBlock';
import { LinkInternal } from '~/components/LinkInternal';
import { Annotations } from '~/types/notion/common';

function parseNotionBlockResults(blockResults: ListBlockChildrenResponse['results']) {
  let buildUnorderedListHtmlTags: string[] = [];

  return blockResults.map((partialBlock, blockIndex) => {
    const block = partialBlock as Extract<typeof partialBlock, { type: string }>;

    const { id, type } = block;

    const result = [];

    if (type === 'heading_1') {
      result.push(
        <h3
          key={`${id}_${blockIndex}`}
          className="text-xl md:text-2xl font-recursive-semibold font-recursive-semi-casual"
        >
          {block.heading_1.rich_text[0].plain_text}
        </h3>,
      );
    }

    if (type === 'heading_2') {
      result.push(
        <h3
          key={`${id}_${blockIndex}`}
          className="text-xl md:text-2xl font-recursive-semibold font-recursive-semi-casual"
        >
          {block.heading_2.rich_text[0].plain_text}
        </h3>,
      );
    }

    if (type === 'heading_3') {
      result.push(
        <h3
          key={`${id}_${blockIndex}`}
          className="text-xl md:text-2xl font-recursive-semibold font-recursive-semi-casual"
        >
          {block.heading_3.rich_text[0].plain_text}
        </h3>,
      );
    }

    if (type === 'paragraph' && block.paragraph.rich_text.length > 0) {
      const paragraph: Array<string | JSX.Element> = [];
      block.paragraph.rich_text.map((richText, richTextIndex) => {
        if (richText.type === 'text') {
          if (richText.text.link) {
            const url = new URL(richText.text.link.url);
            const isInternalLink = url.hostname === 'www.alexandrelim.com';

            const link = isInternalLink ? (
              <LinkInternal key={`${id}_${richTextIndex}`} to={url.pathname}>
                {richText.text.content}
              </LinkInternal>
            ) : (
              <LinkExternal key={`${id}_${richTextIndex}`} href={richText.text.link.url}>
                {richText.text.content}
              </LinkExternal>
            );
            paragraph.push(link);
          } else {
            const annotationsClassName = getAnnotationClassName(richText.annotations);
            const paragraphWithAnnotationsTags = getParagraphWithAnnotationsTags(
              richText.annotations,
              richText.text.content,
            );

            if (annotationsClassName.length > 0) {
              paragraph.push(
                <span
                  className={annotationsClassName.join(' ')}
                  dangerouslySetInnerHTML={{ __html: paragraphWithAnnotationsTags.join('') }}
                  key={`${id}_${blockIndex}_${richTextIndex}`}
                />,
              );
            } else {
              paragraphWithAnnotationsTags.length === 1
                ? paragraph.push(richText.text.content)
                : paragraph.push(
                    <span
                      dangerouslySetInnerHTML={{ __html: paragraphWithAnnotationsTags.join('') }}
                      key={`${id}_${blockIndex}_${richTextIndex}`}
                    />,
                  );
            }
          }
        }
      });
      result.push(<p key={`${id}_${blockIndex}`}>{paragraph}</p>);
    }

    if (type === 'image') {
      let caption = '';
      if (block.image.caption.length > 0 && block.image.caption[0].type === 'text') {
        caption = block.image.caption[0].text.content;
      }

      if (block.image.type === 'file') {
        result.push(<ImageContent src={block.image.file.url} caption={caption} key={`${id}_${blockIndex}`} />);
      }

      if (block.image.type === 'external') {
        result.push(<ImageContent src={block.image.external.url} caption={caption} key={`${id}_${blockIndex}`} />);
      }
    }

    if (type === 'bulleted_list_item') {
      if (buildUnorderedListHtmlTags.length === 0) {
        buildUnorderedListHtmlTags.push('<ul class="pl-8 -mt-4 flex flex-col gap-2 list-disc">');
      }

      if (block.bulleted_list_item.rich_text[0].type === 'text') {
        buildUnorderedListHtmlTags.push(
          `<li><div class="flex gap-2">${block.bulleted_list_item.rich_text[0].text.content}</div></li>`,
        );
      }

      const nextPartialBlock = blockResults[blockIndex + 1];
      const nextBlock = nextPartialBlock as Extract<typeof nextPartialBlock, { type: string }>;

      if (typeof nextBlock === 'undefined' || nextBlock.type !== 'bulleted_list_item') {
        buildUnorderedListHtmlTags.push('</ul>');
        result.push(
          <span
            dangerouslySetInnerHTML={{ __html: buildUnorderedListHtmlTags.join('') }}
            key={`${id}_${blockIndex}`}
          />,
        );
        buildUnorderedListHtmlTags = [];
      }
    }

    if (type === 'code' && block.code.rich_text?.[0]?.type === 'text') {
      let language = block.code.language as Language;

      if (
        block.code.caption.length > 0 &&
        block.code.caption[0].type === 'text' &&
        ['jsx', 'tsx'].includes(block.code.caption[0].plain_text)
      ) {
        language = block.code.caption[0].plain_text as Language;
      }

      result.push(
        <CodeBlock key={`${id}_${blockIndex}`} code={block.code.rich_text[0].text.content} language={language} />,
      );
    }

    if (type === 'quote' && block.quote.rich_text?.[0]?.type === 'text') {
      result.push(
        <blockquote
          key={`${id}_${blockIndex}`}
          className="bg-gray-100 dark:bg-gray-600 p-4 border-l-4 rounded-r-lg font-recursive-slant-max"
        >
          {block.quote.rich_text[0].text.content}
        </blockquote>,
      );
    }

    if (type === 'callout' && block.callout.rich_text?.[0]?.type === 'text') {
      if (block.callout.icon?.type === 'emoji') {
        const isInfo = 'ℹ️' === block.callout.icon.emoji;
        const isLightBulb = '💡' === block.callout.icon.emoji;
        const isWarning = '⚠️' === block.callout.icon.emoji;
        const isDanger = '⚡' === block.callout.icon.emoji;

        result.push(
          <div
            key={`${id}_${blockIndex}`}
            className={clsx(
              'p-4 border-l-4 rounded-r-lg',
              isInfo && 'bg-blue-200 dark:bg-blue-600 border-blue-300',
              isLightBulb && 'bg-emerald-200 dark:bg-emerald-600 border-emerald-300',
              isWarning && 'bg-yellow-200 dark:bg-yellow-600 border-yellow-300',
              isDanger && 'bg-red-200 dark:bg-red-600 border-red-300',
            )}
          >
            {block.callout.rich_text[0].text.content}
          </div>,
        );
      }
    }

    return result;
  });
}

function getAnnotationClassName(annotations: Annotations) {
  const { italic, strikethrough, underline } = annotations;
  const className = [];

  if (strikethrough) className.push('line-through');
  if (underline) className.push('border-b border-solid border-current');
  if (italic) className.push('font-recursive-slant-max');

  return className;
}

function getParagraphWithAnnotationsTags(annotations: Annotations, textContent: string) {
  const { bold, code } = annotations;

  const openHtmlTags = [];
  const closeHtmlTags = [];

  if (bold) {
    openHtmlTags.push('<strong>');
    closeHtmlTags.push('</strong>');
  }
  if (code) {
    openHtmlTags.push('<code>');
    closeHtmlTags.push('</code>');
  }

  openHtmlTags.push(`${textContent}`);

  return openHtmlTags.concat(closeHtmlTags);
}

export { parseNotionBlockResults };
