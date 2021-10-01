// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req, res) {
  if (req.method === 'POST'){
    res.status(200).send({message:'Good request'})
    const body = JSON.parse(req.body)
  }


}
