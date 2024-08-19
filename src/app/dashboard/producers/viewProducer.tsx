'use client'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import MultiSelectViewProducer from "./multi-select-view-producer"
import { useProducerStore } from "@/store/producers"
import { FormEvent, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { API } from "@/lib/axios"
import axios, { AxiosResponse } from "axios"
import { APIResponseProducers } from "./page"
import { Producer } from "./columns"

export default function ViewProducer({childrenTrigger}:{childrenTrigger?: any}) {

    const searchParams = useSearchParams()
    const router = useRouter()
    const search = searchParams.get('edit')

    const { data } = useProducerStore()

    const [openSheet, setOpenSheet] = useState<boolean>(!!search)
    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)
    const [loadingEdit, setLoadingEdit] = useState<boolean>(false)
    const [isFetchEditCount, setIsFetchEditCount] = useState<number>(0)
    const [selectedCropPlanted, setSelectedCropPlanted] = useState<string[]>([]);
    const [dataState, setDataState] = useState(data)

    const handleOnChangeSheet = (state: boolean) => {
        setOpenSheet(state)
        if(!state){
            router.push('/dashboard/producers')
        }
    }

    const getProducersById = async () => {
        setLoadingEdit(true)
        try {
            const response:AxiosResponse<{producer: Producer}> = await axios.get('/api/producers/'+search)
            const data = response.data.producer
            setDataState(data)
            setIsFetchEditCount(0)
            // setSelectedCropPlanted(response.data.producer.cropsPlanted)

            console.log(response.data.producer);
            

        } catch (error) {
            console.log(error);
            
        }finally{
            setLoadingEdit(false)
        }
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        setLoadingSubmit(true)
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formValues = Object.fromEntries(formData.entries())

        try {
            const data = {
                ...formValues, 
                totalAreaFarm: parseInt(formValues.totalAreaFarm as string),
                vegetationArea: parseInt(formValues.vegetationArea as string),
                cropsPlanted: selectedCropPlanted,
                slug: 'teste'+formValues.cpfOrCnpj
            }
            if(search){
                await axios.put('/api/producers/'+search, data)
            } else {
                await axios.post('/api/producers', data)
            }
            router.refresh()
            setOpenSheet(false)
            setSelectedCropPlanted([])

        } catch (error) {
            console.log(error);
            
        }finally{
            setLoadingSubmit(false)
        }
        
    }

    useEffect(() => {
      if(!!search) {
        setOpenSheet(true)
        setIsFetchEditCount(1)
        // setSelectedCropPlanted(dataState?.cropsPlanted!)
        // getProducersById()
      }
    }, [search, selectedCropPlanted])

    useEffect(() => {
        if (isFetchEditCount === 1) {
            getProducersById()
        }
    }, [isFetchEditCount])
    

    // console.log(dataState);
    
    
    

  return (
    <Sheet open={openSheet} onOpenChange={handleOnChangeSheet}>
      {childrenTrigger && <SheetTrigger asChild>{childrenTrigger}</SheetTrigger>}
        <SheetContent>
            <form onSubmit={onSubmit} className="py-10 flex flex-col gap-3 h-full">
                <div>
                    <Label htmlFor="cpfOrCnpj">CPF/CNPJ</Label>
                    <Input name="cpfOrCnpj" type="number" placeholder="CPF/CNPJ" defaultValue={dataState?.cpfOrCnpj} />
                </div>

                <div>
                    <Label htmlFor="producerName">Nome do produtor</Label>
                    <Input name="producerName" type="text" placeholder="Nome do produtor" defaultValue={dataState?.producerName} />
                </div>

                <div>
                    <Label htmlFor="farmName">Nome da Fazenda</Label>
                    <Input name="farmName" type="text" defaultValue={dataState?.farmName} />
                </div>

                <div className="flex gap-3 items-center">
                    <div>
                    <Label htmlFor="state">Estado</Label>
                    <Input name="state" type="text" defaultValue={dataState?.state} />
                    </div>
                    <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input name="city" type="text" defaultValue={dataState?.city} />
                    </div>
                </div>

                <div>
                    <Label htmlFor="totalAreaFarm">Área total da fazenda</Label>
                    <Input name="totalAreaFarm" type="number" defaultValue={dataState?.totalAreaFarm} />
                </div>

                <div>
                    <Label htmlFor="vegetationArea">Área de vegetação</Label>
                    <Input name="vegetationArea" type="number" defaultValue={dataState?.vegetationArea} />
                </div>

                <div>
                    <Label htmlFor="cropsPlanted">Culturas plantadas</Label>
                    <MultiSelectViewProducer defaultValue={selectedCropPlanted} onValueChange={setSelectedCropPlanted} />
                </div>

                <div className="w-full flex-1 flex justify-end flex-col">
                    <Button type="submit" disabled={loadingSubmit} className="w-full">Salvar</Button>
                </div>
            </form>
        </SheetContent>
    </Sheet>

  )
}
