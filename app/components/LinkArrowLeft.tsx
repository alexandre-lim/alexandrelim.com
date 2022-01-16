import { Link, LinkProps } from 'remix';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

interface LinkArrowLeftProps extends LinkProps {
  text: string;
}

function LinkArrowLeft({ text, to }: LinkArrowLeftProps) {
  return (
    <Link to={to} className="group flex gap-2 hover:text-blue-500 font-recursive-semi-casual font-recursive-semibold">
      <ArrowLeftIcon
        height={24}
        width={24}
        className="transition-transform duration-500 group-hover:-translate-x-0.5"
      />
      <span className="tracking-tight">{text}</span>
    </Link>
  );
}

export { LinkArrowLeft };
