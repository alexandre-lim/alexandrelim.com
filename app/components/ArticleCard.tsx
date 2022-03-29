import { Link, LinkProps } from 'remix';
import clsx from 'clsx';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';

interface ArticleCardProps extends LinkProps {
  headerTag: ArticleHeaderTag;
  title: string;
  summary: string;
  arrowText: string;
}
interface ArticleHeaderProps {
  className: string;
  title: string;
}

export enum ArticleHeaderTag {
  h2 = 'h2',
  h3 = 'h3',
}

function ArticleCard({ to, className, headerTag, title, summary, arrowText }: ArticleCardProps) {
  return (
    <article className={clsx('group border rounded-lg flex-auto shadow-md transition hover:-translate-y-1', className)}>
      <Link to={to} className="block h-full p-8">
        {headerTag === ArticleHeaderTag.h2 ? (
          <ArticleCardSecondTitle
            className="group-hover:text-blue-500 text-xl font-recursive-bold font-recursive-semi-casual"
            title={title}
          />
        ) : (
          <ArticleCardThirdTitle
            className="group-hover:text-blue-500 text-xl font-recursive-bold font-recursive-semi-casual"
            title={title}
          />
        )}
        <div className="my-4 text-base">
          <p>{summary}</p>
        </div>
        <div className="flex gap-1 hover:text-blue-500">
          <span className="font-recursive-semibold font-recursive-semi-casual">{arrowText}</span>
          <DoubleArrowRightIcon height={16} width={16} className="hidden translate-y-1.5 group-hover:block" />
        </div>
      </Link>
    </article>
  );
}

function ArticleCardSecondTitle({ className, title }: ArticleHeaderProps) {
  return <h2 className={className}>{title}</h2>;
}

function ArticleCardThirdTitle({ className, title }: ArticleHeaderProps) {
  return <h3 className={className}>{title}</h3>;
}

export { ArticleCard };
