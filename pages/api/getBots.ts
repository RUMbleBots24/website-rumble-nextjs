import {PrismaClient} from '@prisma/client'
import type {NextApiRequest, NextApiResponse} from 'next'


const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res:NextApiResponse){
    try{
        const result = await prisma.bot.findMany({include: {images: true}})
        res.status(200).json({result})
    }catch (err){
        res.status(500).json({error: "Failed to load data"})
    }
}
