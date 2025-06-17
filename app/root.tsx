import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { getThemeSession } from "./utils/theme-server";
import { ThemeProvider } from "./utils/theme-provider";
import "./tailwind.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/logo.svg", // This sets your favicon
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const themeSession = await getThemeSession(request);
  const theme = themeSession.getTheme();

  return json({
    theme,
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <html lang="en" className="scroll-smooth">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="icon" type="image/svg+xml" href="/portfolio/logo.svg" />
          <Meta />
          <Links />
        </head>
        <body className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 transition-colors duration-300">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </ThemeProvider>
  );
}
