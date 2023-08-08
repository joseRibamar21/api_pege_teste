import { prisma } from "../lib/prisma"
import { FastifyReply, FastifyRequest } from "fastify"

async function userCount() {
    const palhacos = await prisma.matricula.findMany({
        select:{
            id: true,
            aluno:{
                select:{
                    id: true,
                    nome: true,
                }
            },
            turma:{
                select:{
                    id: true,
                    codigo: true,
                },
            },
        },
        take: 10,
    });
    return { palhacos }
}


export { userCount }