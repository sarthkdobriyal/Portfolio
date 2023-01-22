import { createClient} from 'next-sanity'
import imageUrlBuilder  from "@sanity/image-url"

const config = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_PROJECT_DATASET || "production",
    apiVersion: "2021-10-21",
    useCdn: true
  }

export const client = createClient(config);

export const urlFor = (source:any) => {
   return imageUrlBuilder(client).image(source)
}

export async function getServerSideProps(){
    const query = `*[_type == "pageInfo"]`
    const pageInfo = await client.fetch(query);
    return {
      props:{
        pageInfo,
      }
    }
  
  }