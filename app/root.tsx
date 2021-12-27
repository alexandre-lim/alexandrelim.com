import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';

import tailwindStyles from './styles/tailwind.css';
import resetStyles from './styles/reset.css';
import appStyles from './styles/app.css';
import darkStyles from './styles/dark.css';
import { ROUTES } from './routes';

export const meta: MetaFunction = () => {
  return { title: 'Alexandre Lim' };
};

export const links: LinksFunction = () => {
  return [
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
      <header className="max-width-wrapper mt-12 flex items-center justify-between h-16">
        <Link to={ROUTES.home} title="Home">
          <h1>Alexandre Lim</h1>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex gap-8">
            <li>
              <Link to={ROUTES.about}>About</Link>
            </li>
            <li>
              <Link to={ROUTES.experience}>Experience</Link>
            </li>
            <li>
              <Link to={ROUTES.blog}>Blog</Link>
            </li>
            <li>
              <Link to={ROUTES.growth}>Personal Growth</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-width-wrapper my-12">
        <div className="max-w-2xl mx-auto">{children}</div>
      </main>
      <footer className="mt-auto p-4 border border-solid border-zinc-300">
        <div className="text-center">
          <p className="text-xs">© 2022-present Alexandre Lim. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
