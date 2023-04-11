import type { NextApiRequest as Req, NextApiResponse as Res } from 'next'
import axios, { AxiosResponse } from 'axios';

async function Handler ( req: Req, res: Res ): Promise<void> {
    // const response:AxiosResponse = await axios.get('127.0.0.1:3000/api/projects');
    // const data:any = await response.data;
    const data = {
        NOP: 267,
    };
    res.status(200).json(data);
}

export default Handler;