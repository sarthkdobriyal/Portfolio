import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../sanity'
import { groq } from "next-sanity";
import { Technology, Project } from '../../typings'


const query = groq`*[_type == "project"] {
  ...,
  technologies[]->
}`

type Data ={
    projects: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const projects: Project[] = await client.fetch(query);

    res.status(200).json({ projects })
  }
  