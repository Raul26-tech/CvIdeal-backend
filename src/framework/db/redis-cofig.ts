import Redis from "ioredis";

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  retryStrategy: (times) => Math.min(times * 50, 2000),
});

export default redisClient;
