import prisma from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"


interface Params {
    params: { id: string }
}

export async function GET(_: NextRequest, { params }: Params) {
    try {
        const producer = await prisma.producer.findUnique({
            where: {id: parseInt(params.id)}
        })
        return NextResponse.json({message: 'success', producer})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}

export async function PUT(req: NextRequest, { params }: Params) {
    const data = await req.json()
    try {
        const producer = await prisma.producer.update({ where: {id: parseInt(params.id)}, data })

        return NextResponse.json({message: "Success", producer: producer})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}