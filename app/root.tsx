import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';
import clsx from 'clsx';

import fontFaceStyles from './styles/font.css';
import tailwindStyles from './styles/tailwind.css';
import resetStyles from './styles/reset.css';
import appStyles from './styles/app.css';
import { ROUTES } from './routes';

import { MaxWidthWrapper } from './components/MaxWidthWrapper';
import { HeaderNavLink } from './components/HeaderNavLink';
import { LoaderNavigationLink } from './components/Loader';
import { CatchBoundaryComponent } from './components/CatchBoundaryComponent';
import { ErrorBoundaryComponent } from './components/ErrorBoundaryComponent';
import { MobileMenu } from './components/MobileMenu';
import { ThemeToogle } from './components/ThemeToogle';

export const meta: MetaFunction = () => {
  return { title: 'Alexandre Lim' };
};

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: fontFaceStyles },
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: resetStyles },
    { rel: 'stylesheet', href: appStyles },
  ];
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="transition-[color,_background] duration-[350ms] ease-[ease] delay-[0s]">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                if (
                  localStorage.getItem('theme') === 'dark' ||
                  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                console.error(e);
              }
            })();`,
          }}
        />
        <LoaderNavigationLink />
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="root"
      className={clsx(
        'flex flex-col min-h-full',
        'bg-[color:var(--light-color-background)] dark:bg-[color:var(--dark-color-background)]',
      )}
    >
      <MaxWidthWrapper
        tag="header"
        className={clsx(
          'md:mt-12 flex items-center justify-between h-16 sticky top-0 z-10',
          'bg-[color:var(--light-color-background)] dark:bg-[color:var(--dark-color-background)]',
        )}
      >
        <Link
          to={ROUTES.home}
          title="Home"
          className={clsx(
            'text-2xl',
            'font-recursive-casual font-recursive-bold hover:font-recursive-slant-max',
            'transition-[font-variation-settings] duration-300',
          )}
        >
          <h1>Alexandre&nbsp;Lim</h1>
        </Link>
        <nav aria-label="Navigation Menu" className="hidden md:block">
          <ul className="flex gap-8 font-recursive-semi-casual font-recursive-medium">
            <li>
              <HeaderNavLink to={ROUTES.about}>About</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to={ROUTES.experience}>Experience</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to={ROUTES.blog}>Blog</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to={ROUTES.books}>Book notes</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to={ROUTES.coursesReview}>Courses review</HeaderNavLink>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <ThemeToogle />
        </div>
        <MobileMenu />
      </MaxWidthWrapper>
      <MaxWidthWrapper tag="main" className="mt-16 mb-24 text-lg">
        {children}
      </MaxWidthWrapper>
      <footer className="mt-auto p-4">
        <div className="text-center">
          <p className="text-xs text-gray-700 font-recursive-semi-casual dark:text-slate-50">
            © 2022-present Alexandre Lim. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error">
      <Layout>
        <ErrorBoundaryComponent errorMessage={error.message} />
      </Layout>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <CatchBoundaryComponent />
      </Layout>
    </Document>
  );
}
