import { createCookieSessionStorage } from "remix";

if (!process.env.SESSION_SECRETS) {
  throw new Error(
    'Fail initialising the session storge; SESSION_SECRETS is missing',
  );
}

export let sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "dish_session",
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        secrets: process.env.SESSION_SECRETS.split(','),
        secure: process.env.NODE_ENV === 'production' ?? false,
    },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;