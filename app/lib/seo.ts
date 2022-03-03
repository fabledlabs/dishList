import {initSeo } from 'remix-seo'

export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://dishlist.fabledlabs.com' : 'http://localhost:3000'
export const baseEmail = 'hi@fabledlabs.com'

export const { getSeo, getSeoLinks, getSeoMeta } = initSeo({
  title: "Let's build great digital products",
  titleTemplate: "%s | DishList",
  description: "A library of curated resources and a labratory of useful experiments all about building great digital products.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'DishList',
    images: [
      {
        url: `${baseUrl}/static/og/default.png`,
        alt: 'DishList',
      },
    ],
  },
  twitter: {
    creator: '@wking__',
    site: '@wking__',
    card: 'summary_large_image',
  },
})