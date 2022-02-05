import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';

import fontFaceStyles from './styles/font.css';
import tailwindStyles from './styles/tailwind.css';
import resetStyles from './styles/reset.css';
import appStyles from './styles/app.css';
import darkStyles from './styles/dark.css';
import { ROUTES } from './routes';

import { MaxWidthWrapper } from './components/MaxWidthWrapper';
import { HeaderNavLink } from './components/HeaderNavLink';
import { LoaderNavigationLink } from './components/Loader';
import { CatchBoundaryComponent } from './components/CatchBoundaryComponent';
import { ErrorBoundaryComponent } from './components/ErrorBoundaryComponent';
import { MobileMenu } from './components/MobileMenu';

export const meta: MetaFunction = () => {
  return { title: 'Alexandre Lim' };
};

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: fontFaceStyles },
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: resetStyles },
    { rel: 'stylesheet', href: appStyles },
    {
      rel: 'stylesheet',
      href: darkStyles,
      media: '(prefers-color-scheme: dark)',
    },
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
      <body>
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
    <div id="root" className="flex flex-col min-h-full">
      <MaxWidthWrapper
        tag="header"
        className="md:mt-12 flex items-center justify-between h-16 sticky top-0 bg-[color:var(--color-background)] z-10"
      >
        <Link
          to={ROUTES.home}
          title="Home"
          className="text-2xl font-recursive-casual font-recursive-bold transition-[font-variation-settings] duration-300 hover:font-recursive-slant-max"
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
        <MobileMenu />
      </MaxWidthWrapper>
      <MaxWidthWrapper tag="main" className="mt-16 mb-24">
        {children}
      </MaxWidthWrapper>
      <footer className="mt-auto p-4 border border-solid border-zinc-300">
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
