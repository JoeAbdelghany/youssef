import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios';

type Data = {
    NUJ: number,
    hits:any,
}
// NextApiResponse<Data>
async function Handler ( req: NextApiRequest, res: NextApiResponse ): Promise<void> {
    const response:AxiosResponse = await axios.get('http://127.0.0.1:8000/api/users');
    const users:any = response.data;  
    const data: Data = {
        NUJ: users.length,
        hits: users
    };  
    res.status(200).json(data);
}

export default Handler;