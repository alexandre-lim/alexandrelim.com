import clsx from 'clsx';
import { Link, LinkProps } from 'remix';

interface BookdCardDetailProps extends LinkProps {
  title: string;
  author: string;
  summary: string;
  imgSrc: string;
}

function BookCardDetail({ to, title, author, summary, imgSrc }: BookdCardDetailProps) {
  return (
    <article className="group max-w-4xl w-full mx-auto border shadow-sm transition hover:-translate-y-1">
      <Link to={to} className="block h-full p-6 overflow-hidden">
        <div className="flex flex-col items-baseline gap-8 md:flex-row">
          <img
            className={clsx('inline-block object-contain min-w-[160px] min-h-[240px] w-40 h-60 self-center')}
            src={imgSrc}
            alt={`${title} by ${author}`}
          />
          <div className="w-full pt-2">
            <h2 className="text-xl text-center md:text-left md:text-2xl font-recursive-bold font-recursive-semi-casual mb-4 group-hover:text-blue-500">
              <span>{`${title}`}</span> by&nbsp;<span>{`${author}`}</span>
            </h2>
            <p>{summary}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export { BookCardDetail };
