import type { Contacts } from "@prisma/client";
import { ContactsRepositoryPrisma } from "../repositories/contacts.repository.js";
import type { CreateContact, UpdateContact } from "../interfaces/contacts.interface.ts";
import type { GetContactsByUserId } from "../interfaces/contacts.interface.ts";
import { UserRepositoryPrisma } from "../repositories/user.repository.js";


export class ContactsUseCase{
    private contactsRepository: ContactsRepositoryPrisma;
    private userRepository: UserRepositoryPrisma;
    constructor(){
        this.contactsRepository = new ContactsRepositoryPrisma();   
        this.userRepository = new UserRepositoryPrisma();
    }
    async createContact({name, email, phone,emailAuth}: CreateContact): Promise<Contacts>{
       const user = await this.userRepository.getUserByEmail({email: emailAuth});
       if (!user){
        throw new Error("User not found");
       }
       const verifyIfExistsContact = await this.contactsRepository.findByEmailOrPhone(email, phone);
       if (verifyIfExistsContact){
        throw new Error("Contact with given email or phone already exists");
       }
       const contact= await this.contactsRepository.createContact({name, email, phone, userId: user.id});
       return contact;
    }
 async listContacts(emailAuth: string): Promise<Contacts[]>{
    const user = await this.contactsRepository.findByEmailOrPhone(emailAuth, "");
    if (!user){
        throw new Error("User not found");
    }
    const contacts = await this.contactsRepository.listContactsByUserId( user);
    return contacts;
 }
 async listContactsByUserId({userId}: GetContactsByUserId): Promise<Contacts[]>{
        const result = await this.contactsRepository.listContactsByUserId({userId});
        return result;
    }   
async updateContact({id, name,phone, email }: UpdateContact): Promise<Contacts>{
    const contact = await this.contactsRepository.updateContact({
        id,
        name,
        email,
        phone});
    return contact;
}
}
    //Implement use case methods here