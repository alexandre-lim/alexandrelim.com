import { Link } from 'remix';
import { ImageContent } from '~/components/ImageContent';

import { LinkExternal } from '~/components/LinkExternal';
import { ListBlockChildrenResponseResults } from '~/types/notion/listBlockChildrenResponseResults';

function parseBlogNotionBlockResults(blockResults: ListBlockChildrenResponseResults) {
  return blockResults.map((block, blockIndex) => {
    const { id, type } = block;

    const result = [];

    if (type === 'heading_1') {
      result.push(
        <h3
          key={`${id}_${blockIndex}`}
          className="text-xl md:text-2xl font-recursive-semibold font-recursive-semi-casual"
        >
          {block.heading_1.text[0].plain_text}
        </h3>,
      );
    }

    if (type === 'heading_2') {
      result.push(
        <h3
          key={`${id}_${blockIndex}`}
          className="text-xl md:text-2xl font-recursive-semibold font-recursive-semi-casual"
        >
          {block.heading_2.text[0].plain_text}
        </h3>,
      );
    }

    if (type === 'heading_3') {
      result.push(
        <h3
          key={`${id}_${blockIndex}`}
          className="text-xl md:text-2xl font-recursive-semibold font-recursive-semi-casual"
        >
          {block.heading_3.text[0].plain_text}
        </h3>,
      );
    }

    if (type === 'paragraph' && block.paragraph.text.length > 0) {
      const paragraph: Array<string | JSX.Element> = [];
      block.paragraph.text.map((richText, richTextIndex) => {
        if (richText.type === 'text') {
          if (richText.text.link) {
            const url = new URL(richText.text.link.url);
            const isInternalLink = url.hostname === 'www.alexandrelim.com';

            const link = isInternalLink ? (
              <Link
                key={`${id}_${richTextIndex}`}
                to={url.pathname}
                className="text-blue-500 transition-shadow hover:shadow-[0_2px_0_0_rgb(59_130_246_/_var(--tw-text-opacity))]"
              >
                {richText.text.content}
              </Link>
            ) : (
              <LinkExternal
                key={`${id}_${richTextIndex}`}
                href={richText.text.link.url}
                value={richText.text.content}
              />
            );
            paragraph.push(link);
          } else {
            paragraph.push(richText.text.content);
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
        result.push(<ImageContent src={block.image.file.url} caption={caption} />);
      }

      if (block.image.type === 'external') {
        result.push(<ImageContent src={block.image.external.url} caption={caption} />);
      }
    }

    return result;
  });
}

export { parseBlogNotionBlockResults };
