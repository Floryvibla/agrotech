import prisma from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    try {
        const producers = await prisma.producer.findMany()
        return NextResponse.json({message: 'Success', producers})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()
    try {
        const producer = await prisma.producer.create({ data })

        return NextResponse.json({message: "Success", producer: producer})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}

export async function DELETE(req: NextRequest) {
    const data = await req.json()
    try {
        const deletedProducers = await prisma.producer.deleteMany({ where: { id: { in: data.ids } } })

        return NextResponse.json({message: "Success", count: deletedProducers.count})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}