import { Link, LinkProps } from 'remix';
import clsx from 'clsx';

interface ButtonLinkProps extends LinkProps {
  text: string;
  className: string;
}

function ButtonLink({ text, to, className }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={clsx(
        'font-recursive-semi-casual font-recursive-medium',
        'inline-block rounded-full p-4 shadow-sm',
        'transition outline outline-1 outline-blue-500',
        'hover:ring-2 hover:ring-offset-4',
        'focus-visible:ring-2 focus-visible:ring-offset-4',
        'dark:ring-offset-[color:var(--dark-color-background)] ',
        className,
      )}
    >
      {text}
    </Link>
  );
}

export { ButtonLink };
