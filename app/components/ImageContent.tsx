import * as AspectRatio from '@radix-ui/react-aspect-ratio';

interface ImageContentProps {
  src: string;
  caption: string;
}

function ImageContent({ src, caption }: ImageContentProps) {
  return (
    <div className="w-full md:w-3/4 overflow-hidden mx-auto rounded-sm">
      <AspectRatio.Root ratio={16 / 9}>
        <img className="object-cover object-center w-full h-full" src={src} title={caption} alt={caption} />
      </AspectRatio.Root>
    </div>
  );
}

export { ImageContent };
