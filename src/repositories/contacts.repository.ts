import type { Contacts, ContactsRepository, CreateContactDataRecieved } from "../interfaces/contacts.interface.ts";
import { prisma } from "../database/prisma-client.js";  
import type { GetContactById, GetContactsByUserId, UpdateContact } from "../interfaces/contacts.interface.ts";       


class ContactsRepositoryPrisma implements ContactsRepository {
    async createContact(data: CreateContactDataRecieved): Promise<Contacts>{
        const result = await prisma.contacts.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                userId: data.userId
            }
        });
        return result;
    }
    async findByEmailOrPhone(email: string, phone: string): Promise<Contacts | null>{
        const result = await prisma.contacts.findFirst({
            where: {
                OR: [
                    { email: email },
                    { phone: phone }
                ]
            }
        });
        return result || null;      
        }
    
    async listContactsByUserId(data: GetContactsByUserId): Promise<Contacts[]>{
        const result = await prisma.contacts.findMany({
            where: {
                userId: data.userId
            }
        });
        return result;
    }
    deleteContact(id: String): Promise<void>{
        throw new Error("Method not implemented.");
    }
    async updateContact(data:UpdateContact): Promise<Contacts>{
       const result = await prisma.contacts.update({
            where: {
                id: data.id
            },
            data: {
             name: data.name,
             email: data.email,
             phone: data.phone
            },
        });
        return result;  
    }
}

export { ContactsRepositoryPrisma };