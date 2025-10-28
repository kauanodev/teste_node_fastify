import type { FastifyInstance } from "fastify";
import { ContactsUseCase } from "../usecases/contacts.usecases.js";
import type { CreateContact} from "../interfaces/contacts.interface.js";

export async function contactsRoutes(fastify: FastifyInstance){
     const contactsUseCase : ContactsUseCase = new ContactsUseCase();
    fastify.post<{Body: CreateContact}>('/', async (req, res)=>{
       
        const {name, email, phone, userId} = req.body;
        try {
            const data = await contactsUseCase.createContact({name, email, phone, userId});
            return res.status(201).send(data);
        
        } 
        catch (error) {
            return res.status(500).send({message: "Internal Server Error"});
        }   
    })
    fastify.get('/', async (req, res)=>{
        return res.send({message: "Get all contacts - to be implemented"});
    })
 
}   