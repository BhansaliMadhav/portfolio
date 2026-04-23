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
      href: "/logo.svg",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap",
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
          <link rel="icon" type="image/svg+xml" href="/logo.svg" />
          <Meta />
          <Links />
        </head>
        <body className="min-h-screen font-sans">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </ThemeProvider>
  );
}
