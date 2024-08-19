import prisma from "@/lib/db";
import { producers } from "@/mocks/constants";
import { NextResponse } from "next/server";

export async function GET() {
    try {

        // deletando todos primeiro
        await prisma.producer.deleteMany({})

        // Usa createMany para criar múltiplos registros de uma vez
        const result = await prisma.producer.createMany({
            data: producers,
            skipDuplicates: true, // Evita duplicados com base em constraints únicas (como cpfOrCnpj)
        });

        return NextResponse.json({
            message: 'Successfully created producers',
            count: result.count, // Retorna o número de produtores criados
        });
    } catch (error) {
        console.error("Error seeding producers:", error);
        return NextResponse.json({
            message: "Error creating producers",
            error: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}
