import type { Contacts } from "@prisma/client";
import { ContactsRepositoryPrisma } from "../repositories/contacts.repository.js";
import type { CreateContact } from "../interfaces/contacts.interface.ts";
import type { GetContactsByUserId } from "../interfaces/contacts.interface.ts";
export class ContactsUseCase{
    private contactsRepository: ContactsRepositoryPrisma;
    constructor(){
        this.contactsRepository = new ContactsRepositoryPrisma();   
    }
    async createContact({name, email, phone, userId}: CreateContact): Promise<Contacts>{
       const result = await this.contactsRepository.createContact({name, email, phone, userId});
       return result;
    }

    async getContactsByUserId({userId}: GetContactsByUserId): Promise<Contacts[]>{
        const result = await this.contactsRepository.getContactsByUserId({userId});
        return result;
    }       
}
    //Implement use case methods here