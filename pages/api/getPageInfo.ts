import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../sanity'
import { groq } from "next-sanity";
import { PageInfo } from '../../typings'


const query = groq`*[_type == "pageInfo"][0]`

type Data ={
    pageInfo: PageInfo
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const pageInfo: PageInfo = await client.fetch(query);

    res.status(200).json({ pageInfo })
  }
  