import type { FastifyInstance } from "fastify";
import { ContactsUseCase } from "../usecases/contacts.usecases.js";
import type { CreateContact, UpdateContact} from "../interfaces/contacts.interface.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import type { Contacts } from "@prisma/client";


export async function contactsRoutes(fastify: FastifyInstance){
     const contactsUseCase : ContactsUseCase = new ContactsUseCase();
     fastify.addHook('preHandler', authMiddleware);
     fastify.post<{Body: CreateContact}>('/', async (req, res)=>{
       
        const {name, email, phone} = req.body;
        const emailAuth= req.headers['email'];
        try {
            const data = await contactsUseCase.createContact({name, email, phone, emailAuth});
            return res.status(201).send(data);
        
        } 
        catch (error) {
            return res.status(500).send({message: "Internal Server Error"});
        }   
    })
    fastify.get('/', async (req, res)=>{
        const emailAuth= req.headers['email'];
        
        try {
        const  data= await contactsUseCase.listContacts(emailAuth);
            
                return res.status(201).send(data);
           
        }
        catch (error) {
            return res.status(500).send({message: error});
        }
       
 
    })
    fastify.put<{Body: Contacts, Params: {id:string}}>('/:id', async (req, res)=>{
        const {id} = req.params;
        const {name, email, phone} = req.body;
        const dataRecieved: UpdateContact= {name,id, email, phone};  
        try {   
        const data =await contactsUseCase.updateContact(dataRecieved);
        return res.send(data);}
        catch (error) {
            return res.status(500).send({message: "Internal Server Error"});
        }
    })
 
}   