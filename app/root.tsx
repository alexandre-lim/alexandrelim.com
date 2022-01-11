import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';

import fontFaceStyles from './styles/font.css';
import tailwindStyles from './styles/tailwind.css';
import resetStyles from './styles/reset.css';
import appStyles from './styles/app.css';
import darkStyles from './styles/dark.css';
import { ROUTES } from './routes';

import { MaxWidthWrapper } from './components/MaxWidthWrapper';
import { HeaderNavLink } from './components/HeaderNavLink';

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
      <MaxWidthWrapper tag="header" className="mt-12 flex items-center justify-between h-16">
        <Link
          to={ROUTES.home}
          title="Home"
          className="text-2xl font-recursive-casual font-recursive-bold transition-[font-variation-settings] duration-300 hover:font-recursive-slant-max"
        >
          <h1>Alexandre&nbsp;Lim</h1>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:block">
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
              <HeaderNavLink to={ROUTES.growth}>Personal&nbsp;Growth</HeaderNavLink>
            </li>
          </ul>
        </nav>
      </MaxWidthWrapper>
      <MaxWidthWrapper tag="main" className="my-12">
        {children}
      </MaxWidthWrapper>
      <footer className="mt-auto p-4 border border-solid border-zinc-300">
        <div className="text-center">
          <p className="text-xs">© 2022-present Alexandre Lim. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
