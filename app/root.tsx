import { User } from '@prisma/client'
import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix'

import { Env } from './types'
import { getSeo } from '~/lib/seo'
import styles from '~/styles/app.css'
import { Providers } from './components/Providers'
import SiteLayout from './components/SiteLayout'

const [seoMeta, seoLinks] = getSeo()

export const meta: MetaFunction = () => seoMeta

export const links: LinksFunction = () => {
  return [
    ...seoLinks,
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
  ]
}

type LoaderData = {
  ENV: Env
  user: User | null
}

export const loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData> => {
  // const user = await authenticator.isAuthenticated(request)
  return {
    ENV: {
      FATHOM_ID: process.env.FATHOM_ID,
    },
    user: null,
  }
}

export default function App() {
  const data = useLoaderData()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans">
        <span className="text-tertiary absolute flex -translate-y-full transform space-x-1 border-b border-gray-150 bg-white p-2 focus-within:relative focus-within:translate-y-0">
          <Link className="text-primary font-semibold" to="#main">
            Skip to content
          </Link>
          <span>(if available)</span>
          <span>or</span>
          <Link className="text-primary font-semibold" to="#list">
            jump to list
          </Link>
          <span>(if available)</span>
        </span>
        <Providers>
          <SiteLayout>
            <Outlet />
          </SiteLayout>
        </Providers>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
