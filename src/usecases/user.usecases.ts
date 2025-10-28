import type { User } from "@prisma/client";
import {UserRepositoryPrisma} from"../repositories/user.repository.js";
import type { CreateUser } from "../interfaces/users.interface.ts";
import type { GetUserByEmail } from "../interfaces/users.interface.ts";

export class UserUseCase {
    private userRepository: UserRepositoryPrisma;
    constructor(){
this.userRepository  = new UserRepositoryPrisma();
    }

    async createUser({name, email}: CreateUser): Promise<CreateUser>{
   const result = await this.userRepository.createUser({name, email});
    return result;}

   async getUserByEmail(email: GetUserByEmail): Promise<User | null>{ 
    const result = await this.userRepository.getUserByEmail(email);
    return result;
}

    }
