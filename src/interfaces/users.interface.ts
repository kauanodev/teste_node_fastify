export interface User{
    id: string,
    email: string,
    name: string,
    date_created: Date,
    date_updated: Date

}

export interface CreateUser{
    name: string,
    email: string
}
export interface GetUserById{
   id: string
}
export interface GetUserByEmail{
   email: string
}
export interface UpdateUser{
    id: string,
    name?: string,
    email?: string
}
export interface UserRepository{
    createUser(data: CreateUser): Promise<User>;
    getUserById(data: GetUserById): Promise<User | null>;
    getUserByEmail(data: GetUserByEmail): Promise<User | null>;
    deleteUser(id: String): Promise<void>;
    updateUser(data:UpdateUser): Promise<User>
    
    
}