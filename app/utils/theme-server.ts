import { createCookieSessionStorage } from "@remix-run/node";

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    secure: true,
    secrets: ["theme-secret"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

export async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return themeValue === "light" || themeValue === "dark"
        ? themeValue
        : "dark";
    },
    setTheme: (theme: "light" | "dark") => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session),
  };
}
