import type { NextApiRequest as Req, NextApiResponse as Res } from 'next'
import axios, { AxiosResponse } from 'axios';


async function Handler (req: Req,res: Res):Promise<void> {
    let id = req.query.id;
    let response:AxiosResponse = await axios.get('http://127.0.0.1:8000/api/users');
    let users:any = await response.data;
    let user:any = users.find((user: { id: any; }) => user.id == id);
    if (user) {
        res.status(200).json(user);
    }else {
        res.status(400).json({ error: "there is no user" });
    }
}

export default Handler;