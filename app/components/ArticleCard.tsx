import { Link, LinkProps } from 'remix';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';

interface ArticleCardProps extends LinkProps {
  title: string;
  summary: string;
  arrowText: string;
}

function ArticleCard({ to, title, summary, arrowText }: ArticleCardProps) {
  return (
    <article className="group border rounded-lg flex-auto shadow-md transition hover:-translate-y-1 md:max-w-xs">
      <Link to={to} className="block h-full p-8">
        <h3 className="group-hover:text-blue-500 text-xl font-recursive-semibold font-recursive-semi-casual">
          {title}
        </h3>
        <div className="my-4">
          <p>{summary}</p>
        </div>
        <div className="flex gap-1 hover:text-blue-500">
          <span className="font-recursive-semibold font-recursive-semi-casual">{arrowText}</span>
          <DoubleArrowRightIcon height={16} width={16} className="hidden translate-y-1 group-hover:block" />
        </div>
      </Link>
    </article>
  );
}

export { ArticleCard };
