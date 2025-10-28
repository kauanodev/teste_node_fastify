import type { Contacts, ContactsRepository } from "../interfaces/contacts.interface.ts";
import { prisma } from "../database/prisma-client.js";  
import type { CreateContact, GetContactById, GetContactsByUserId, UpdateContact } from "../interfaces/contacts.interface.ts";       


class ContactsRepositoryPrisma implements ContactsRepository {
    async createContact(data: CreateContact): Promise<Contacts>{
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
    getContactById(data: GetContactById): Promise<Contacts | null>{
        throw new Error("Method not implemented.");
    }
    getContactsByUserId(data: GetContactsByUserId): Promise<Contacts[]>{
        throw new Error("Method not implemented.");
    }
    deleteContact(id: String): Promise<void>{
        throw new Error("Method not implemented.");
    }
    updateContact(data:UpdateContact): Promise<Contacts>{
        throw new Error("Method not implemented.");
    }
}

export { ContactsRepositoryPrisma };