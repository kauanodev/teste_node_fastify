export interface Contacts{
    id: string,
    name: string,
    email: string,
    phone: string,
    userId: string

}

export interface CreateContact{
    name: string,
    email: string,
    phone: string,
    emailAuth: string
}

export interface CreateContactDataRecieved{
    name: string,
    email: string,
    phone: string,
    userId: string
}
export interface GetContactById{
   id: string
}

export interface GetContactsByUserId{
   userId: string
}

export interface UpdateContact{
    id: string,
    name: string,
    email: string,
    phone: string
}

export interface ContactsRepository{
    createContact(data: CreateContactDataRecieved): Promise<Contacts>;
    deleteContact(id: string): Promise<void>;
    updateContact(data:Contacts): Promise<Contacts>
    findByEmailOrPhone(email: string, phone: string): Promise<Contacts | null>;
    listContactsByUserId(data: GetContactsByUserId): Promise<Contacts[]>;    
}