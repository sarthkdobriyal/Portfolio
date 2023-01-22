import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../sanity'
import { groq } from "next-sanity";
import { Technology } from '../../typings'


const query = groq`*[_type == "skill"]`

type Data ={
    skills: Technology[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const skills: Technology[] = await client.fetch(query);

    res.status(200).json({ skills })
  }
  