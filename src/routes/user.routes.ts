import type { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecases.js";
import type { CreateUser } from "../interfaces/users.interface.ts";

export async function userRoutes(fastify: FastifyInstance){
     const userUseCase : UserUseCase = new UserUseCase();
    fastify.post<{Body: CreateUser}>('/', async (req, res)=>{
       
        const {name, email} = req.body;
        try {
            const verifyEmailExists = await userUseCase.getUserByEmail({email});
            console.log(verifyEmailExists?"exists":"not exists");
            if (verifyEmailExists){
                return {existence: true};
                throw new Error("AHHHHHHHHHHHHHHHHH Email already exists");
            }
            const data = await userUseCase.createUser({name, email});
            return res.status(201).send(data);
        
        } 
        catch (error) {
            return res.status(500).send({message: "Internal Server Error"});
        }   
    })
    fastify.get('/', async (req, res)=>{
        return res.send({message: "Get all users - to be implemented"});
    })
 
}