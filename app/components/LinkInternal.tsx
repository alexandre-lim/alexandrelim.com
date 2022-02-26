import clsx from 'clsx';
import { Link, LinkProps } from 'remix';

const LinkInternal: React.FC<LinkProps> = ({ children, to, className }) => {
  return (
    <Link
      to={to}
      className={clsx(
        'text-blue-500 transition-shadow hover:shadow-[0_2px_0_0_rgb(59_130_246_/_var(--tw-text-opacity))]',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export { LinkInternal };
