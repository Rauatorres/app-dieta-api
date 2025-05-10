import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.listen({ port: 3000 }, (err, adress) => {
    if(err){
        console.error(err);
        process.exit(1);
    }else{
        console.log(`Server successfully running on ${adress} ...`);
    }
});
