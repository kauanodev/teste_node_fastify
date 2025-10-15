export interface User{
    id: string,
    email: string,
    name: string

}

export interface CreateUser{
    name: string,
    email: string
}
export interface GetUserById{
   id: String
}
export interface GetUserByEmail{
   email: String
}
export interface UpdateUser{
    id: String,
    name?: String,
    email?: String
}
export interface UserRepository{
    createUser(data: CreateUser): Promise<User>;
    getUserById(data: GetUserById): Promise<User | null>;
    getUserByEmail(data: GetUserByEmail): Promise<User | null>;
    deleteUser(id: String): Promise<void>;
    updateUser(data:UpdateUser): Promise<User>
    
}