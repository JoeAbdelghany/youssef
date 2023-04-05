import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios';

type Data = {
    name: string
  }

async function Handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ):Promise<void> 
    {
    let response:AxiosResponse = await axios.get('http://127.0.0.1:8000/api/users');
    let users:any = await response.data;    
    res.status(200).json(users);
}

export default Handler;