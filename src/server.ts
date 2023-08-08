import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'


import { userRoutes } from './routes/user'
import { prisma } from './lib/prisma'


async function bootstrap() {
  const fastify = Fastify({
    logger: true
  })

  await fastify.register(cors, {
    origin: true,
  })

  await fastify.register(jwt, {
    secret: 'nlwcopa'
  })

  fastify.register(userRoutes)
  fastify.get('/',()=>{
    return "Olaaa"
  })

  await fastify.listen({ port: 3333 })
}

bootstrap()