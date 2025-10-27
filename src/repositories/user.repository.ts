import type { User, UserRepository } from "../interfaces/users.interface.ts";
import { prisma } from "../database/prisma-client.js";
import type { CreateUser, GetUserByEmail, GetUserById, UpdateUser } from "../interfaces/users.interface.ts";


 class UserRepositoryPrisma implements UserRepository {
 
    async createUser(data: CreateUser): Promise<User> {
        const result = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email
            }
        });
        return result;
    }
    getUserById(data: GetUserById): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    getUserByEmail(data: GetUserByEmail): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: String): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateUser(data: UpdateUser): Promise<User> {
        throw new Error("Method not implemented.");
    }
    //Repository methods here
}


export { UserRepositoryPrisma };