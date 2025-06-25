import Fastify from "fastify";
import routes from "./routes";
import fastifyFormbody from "@fastify/formbody";
import fastifyCors from "@fastify/cors";

const fastify = Fastify({ logger: false });

fastify.register(fastifyCors, {
    origin: [
        'http://localhost:5173'
    ]
});
fastify.register(fastifyFormbody);
fastify.register(routes);

fastify.listen({ port: 3000 }, (err, adress) => {
    if(err){
        console.error(err);
        process.exit(1);
    }else{
        console.log(`Server successfully running on ${adress} ...`);
    }
});
