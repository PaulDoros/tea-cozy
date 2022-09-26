import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from './styles/globals.css';
import navBarStyles from './styles/navBar.css';
import mainPageStyles from './styles/mainPage.css';
import tailwindStyles from "./styles/tailwind.css"



export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Tea Cozy",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: navBarStyles },
  { rel: 'stylesheet', href: globalStyles },
  { rel: 'stylesheet', href: mainPageStyles },
  { rel: "stylesheet", href: tailwindStyles }
];


export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
