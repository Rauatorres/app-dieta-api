import Fastify from "fastify";
import routes from "./routes";

const fastify = Fastify({ logger: true });

fastify.register(routes);

fastify.listen({ port: 3000 }, (err, adress) => {
    if(err){
        console.error(err);
        process.exit(1);
    }else{
        console.log(`Server successfully running on ${adress} ...`);
    }
});
