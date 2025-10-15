import fastify, { type FastifyInstance } from "fastify";
import {prisma} from "./database/prisma-client.js";

const app: FastifyInstance = fastify({logger: true});

app.listen({port: 3100},
    ()=> console.log("Server is running on http://localhost:3100")
);