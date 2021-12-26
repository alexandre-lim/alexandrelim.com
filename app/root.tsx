import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';

import resetStylesUrl from './styles/reset.css';
import appStylesUrl from './styles/app.css';
import darkStylesUrl from './styles/dark.css';

export const meta: MetaFunction = () => {
  return { title: 'Alexandre Lim' };
};

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: resetStylesUrl },
    { rel: 'stylesheet', href: appStylesUrl },
    {
      rel: 'stylesheet',
      href: darkStylesUrl,
      media: '(prefers-color-scheme: dark)',
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
