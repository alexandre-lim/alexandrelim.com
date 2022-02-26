import { Link, LinkProps } from 'remix';
import clsx from 'clsx';

import { ArrowRightIcon } from '@radix-ui/react-icons';

interface LinkArrowRightProps extends LinkProps {
  text: string;
}

function LinkArrowRight({ text, to }: LinkArrowRightProps) {
  return (
    <Link to={to} className="group flex gap-2 hover:text-blue-500 font-recursive-semi-casual font-recursive-semibold">
      <span className="tracking-tight transition-[font-variation-settings] duration-300 group-hover:font-recursive-slant-max">
        {text}
      </span>
      <span
        className={clsx(
          'md:border md:border-gray-600 md:dark:border-gray-300 md:rounded-full md:p-1',
          'md:-translate-y-1 md:transition-transform md:duration-500 md:group-hover:translate-x-0.5',
        )}
      >
        <ArrowRightIcon height={24} width={24} />
      </span>
    </Link>
  );
}

export { LinkArrowRight };
