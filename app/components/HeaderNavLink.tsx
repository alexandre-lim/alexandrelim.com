import { Link, LinkProps, useResolvedPath } from 'remix';
import { useMatch } from 'react-router';
import clsx from 'clsx';

function HeaderNavLink({ children, to, className, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link
        className={clsx(
          'transition-[font-variation-settings] duration-300',
          match
            ? 'font-recursive-semibold font-recursive-casual duration-700 hover:font-recursive-slant-base text-blue-500'
            : 'duration-300 hover:font-recursive-slant-max',
          className,
        )}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
}

export { HeaderNavLink };
