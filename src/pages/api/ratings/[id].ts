import type { NextApiRequest as Req, NextApiResponse as Res } from 'next'
import axios, { AxiosResponse } from 'axios';


async function Handler (req: Req,res: Res):Promise<void> {
    let id = req.query.id;
    let response:AxiosResponse = await axios.get('http://127.0.0.1:8000/api/ratings');
    let ratings:any = await response.data;
    let rating:any = ratings.find((rating: { id: any; }) => rating.id == id);
    if (rating) {
        res.status(200).json(rating);
    }else {
        res.status(400).json({ error: "there is no ratings" });
    }
}

export default Handler;