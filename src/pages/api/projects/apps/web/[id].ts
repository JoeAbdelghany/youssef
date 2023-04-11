import type { NextApiRequest as Req, NextApiResponse as Res } from 'next'
import axios, { AxiosResponse } from 'axios';


async function Handler (req: Req,res: Res):Promise<void> {
    let id = req.query.id;
    let response:AxiosResponse = await axios.get('http://127.0.0.1:8000/api/projects/apps/web');
    let projects:any = await response.data;
    let project:any = projects.find((project: { id: any; }) => project.id == id);
    if (project) {
        res.status(200).json(project);
    }else {
        res.status(400).json({ error: "there is no projct" });
    }
}

export default Handler;