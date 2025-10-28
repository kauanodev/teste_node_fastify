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
    name?: string,
    email?: string,
    phone?: string
}

export interface ContactsRepository{
    createContact(data: CreateContact): Promise<Contacts>;
    getContactById(data: GetContactById): Promise<Contacts | null>;
    getContactsByUserId(data: GetContactsByUserId): Promise<Contacts[]>;
    deleteContact(id: string): Promise<void>;
    updateContact(data:UpdateContact): Promise<Contacts>
}