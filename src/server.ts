import fastify, { type FastifyInstance } from "fastify";
import {userRoutes} from "./routes/user.routes.js"
import { contactsRoutes } from "./routes/contacts.routes.js";

const app: FastifyInstance = fastify({logger: true});

app.register(userRoutes, {prefix: '/users'});
app.register(contactsRoutes, {prefix: '/contacts'});
app.listen({port: 3100},
  ()=> console.log("Server is running on http://localhost:3100")
);

