import { Producer } from '@/app/dashboard/producers/columns'
import { create } from 'zustand'


type ProducerStore = {
    edit: (producer: Producer) => void
    data: Producer | null
}
export const useProducerStore = create<ProducerStore>()((set) => ({
    edit: (producer: Producer) => set((state) => ({data: producer})),
    data: null
}))