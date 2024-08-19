'use client'

import { MultiSelect } from "@/components/multi-select"
import { useState } from "react";


interface Props {
  defaultValue: string[]
  onValueChange: (value: string[]) => void
}

export const cropsPlantedList = [
  { value: "Soja", label: "Soja"},
  { value: "Milho", label: "Milho"},
  { value: "Algodão", label: "Algodão"},
  { value: "Café", label: "Café"},
  { value: "Cana de Açucar", label: "Cana de Açucar"},
];


export default function MultiSelectViewProducer({ defaultValue, onValueChange }: Props) {

  return (
    <div>
        <MultiSelect
            options={cropsPlantedList}
            onValueChange={onValueChange}
            defaultValue={defaultValue}
            placeholder="Selecione uma opção"
            variant="inverted"
            animation={2}
            // maxCount={10}
        />
    </div>
  )
}
