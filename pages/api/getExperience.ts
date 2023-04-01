import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../sanity'
import { groq } from "next-sanity";
import { WorkExperience } from '../../typings'


const query = groq`*[_type == "experience"]{
  ...,
  technologies[]->
}`

type Data ={
    experience: WorkExperience[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const experience: WorkExperience[] = await client.fetch(query);

    res.status(200).json({ experience })
  }
  