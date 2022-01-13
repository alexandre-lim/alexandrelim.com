import { Link, LinkProps } from 'remix';
import { ArrowRightIcon } from '@radix-ui/react-icons';

interface LinkArrowRightProps extends LinkProps {
  text: string;
}

function LinkArrowRight({ text, to }: LinkArrowRightProps) {
  return (
    <Link to={to} className="group flex gap-2 hover:text-blue-500 font-recursive-semi-casual font-recursive-semibold">
      <span className="transition-[font-variation-settings] duration-300 group-hover:font-recursive-slant-max">
        {text}
      </span>
      <ArrowRightIcon
        height={24}
        width={24}
        className="transition-transform duration-500 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

export { LinkArrowRight };
