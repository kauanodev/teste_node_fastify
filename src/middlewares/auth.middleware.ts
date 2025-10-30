import type { FastifyReply, FastifyRequest } from "fastify";

export async function authMiddleware(req: FastifyRequest, res: FastifyReply){
    const apiEmail = await req.headers['email'];
    if (!apiEmail){
        return res.status(401).send({message: "Unauthorized: Email header missing"});
    }
}