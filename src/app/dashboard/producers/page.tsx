import { API } from "@/lib/axios";
import { Producer, columns } from "./columns"
import { DataTable } from "./data-table"
import { AxiosResponse } from "axios";

export interface APIResponseProducers {
  message: string;
  producers: Producer[];
}
 
async function findProducersData(): Promise<Producer[]> {
    try {
        const response: AxiosResponse<APIResponseProducers> = await API.get('/producers');
        return response.data.producers;
    } catch (error) {
        console.log("Failed to fetch producers: ", error);
        return [];
    }
    
}

type PageProps = {
  searchParams: {
    edit: string
  }
};


export default async function Page({ searchParams }: PageProps) {
    const data = await findProducersData()

    return (
        <main className="xl:p-10 flex flex-col gap-4">
            <DataTable columns={columns} data={data} />
        </main>
    )
}
