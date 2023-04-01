import {createClient, groq} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;


export const client = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  })

export const urlFor = (source: any) => createImageUrlBuilder({dataset,projectId,apiVersion}).image(source)