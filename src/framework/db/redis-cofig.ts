import Redis from "ioredis";

const redisClient = new Redis({
  host: process.env.REDIS_HOST, // Ou o nome do serviço no Docker Compose (ex: 'redis')
  port: Number(process.env.REDIS_PORT), // Porta padrão do Redis
  retryStrategy: (times) => Math.min(times * 50, 2000), // Estratégia de reconexão
});

export default redisClient;
