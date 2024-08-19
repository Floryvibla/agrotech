"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Edit, MoreVertical, Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"
import { useProducerStore } from "@/store/producers";
import Link from "next/link";


export type Producer = {
  cpfOrCnpj: number;
  producerName: string;
  farmName: string;
  city: string;
  state: string;
  slug: string;
  id: number;
  totalAreaFarm: number;
  vegetationArea: number;
  cropsPlanted: string[];
};

function handleCheckedChange(table:any, value:any) {
    console.log();
}


export const columns: ColumnDef<Producer>[] = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //       <Checkbox
    //         checked={
    //           table.getIsAllPageRowsSelected() ||
    //           (table.getIsSomePageRowsSelected() && "indeterminate")
    //         }
    //         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //         aria-label="Select all"
    //       />
    //     ),
    //     cell: ({ row }) => (
    //       <Checkbox
    //         checked={row.getIsSelected()}
    //         onCheckedChange={(value) => row.toggleSelected(!!value)}
    //         aria-label="Select row"
    //       />
    //     ),
    // },    
    {
        accessorKey: "cpfOrCnpj",
        header: "CPF ou CNPJ",
    },
    {
        accessorKey: "producerName",
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="p-0"
                onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
            >
                Nome do Produtor
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        accessorKey: "farmName",
        header: "Nome da Fazenda",
    },
    {
        accessorKey: "city",
        header: "Cidade",
    },
    {
        accessorKey: "state",
        header: "Estado",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const producer = row.original

            const { edit:handleEditProducer, data } = useProducerStore()
            
        
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => handleEditProducer(producer)}
                        >
                            <Link href={`?edit=${producer.id}`} className="flex items-center">
                                <Edit size={16} className="mr-2" /> Editar
                            </Link>
                            
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                            className="cursor-pointer text-red-600 focus:text-red-600"
                        >
                            <Trash size={16} className="mr-2" />
                            Deletar
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    },
]
