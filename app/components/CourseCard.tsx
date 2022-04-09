import { Link, LinkProps } from 'remix';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';

interface CourseCardProps extends LinkProps {
  title: string;
  author: string;
  imgSrc: string;
  imgAlt: string;
  ratio: number;
}

function CourseCard({ to, title, author, imgSrc, imgAlt, ratio }: CourseCardProps) {
  return (
    <article
      className={clsx(
        'group w-full border rounded-lg shadow-md transition hover:-translate-y-1 md:max-w-xs',
        'dark:border-none dark:bg-[color:var(--dark-block-color-background)]',
      )}
    >
      <Link to={to} className="block h-full overflow-hidden">
        <AspectRatio.Root ratio={ratio}>
          <img className="object-cover w-full h-full rounded-t-lg" src={imgSrc} alt={imgAlt} />
        </AspectRatio.Root>
        <Separator.Root orientation="horizontal" className="h-px w-full bg-gray-200 dark:bg-slate-800" />

        <div className="group-hover:text-blue-500 flex flex-col items-center p-4 gap-1">
          <h3 className="font-recursive-bold text-lg">{title}</h3>
          <span className="font-recursive-medium text-sm">By&nbsp;{author}</span>
        </div>
      </Link>
    </article>
  );
}

export { CourseCard };
