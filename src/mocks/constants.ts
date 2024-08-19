import { HandPlatter, LayoutDashboard } from "lucide-react";

export const menus = [
    {name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard'},
    {name: 'Produtores', icon: HandPlatter, href: '/dashboard/producers'},
]

export const tableHeads = [
    'CPF ou CNPJ',
    'Nome do Produtor',
    'Nome da Fazenda',
    'Cidade',
    'Estado'
]

export const producers = [
  {
    // "id": 1,
    "cpfOrCnpj": "12345678900",
    "producerName": "João Silva",
    "farmName": "Fazenda Boa Vista",
    "city": "Ribeirão Preto",
    "state": "SP",
    "slug": "joao-silva",
    "totalAreaFarm": 1500,
    "vegetationArea": 500,
    "cropsPlanted": ["Soja", "Milho"]
  },
  {
    // "id": 2,
    "cpfOrCnpj": "98765432100",
    "producerName": "Maria Oliveira",
    "farmName": "Fazenda das Palmeiras",
    "city": "Campo Grande",
    "state": "MS",
    "slug": "maria-oliveira",
    "totalAreaFarm": 2000,
    "vegetationArea": 800,
    "cropsPlanted": ["Cana-de-açúcar", "Soja"]
  },
  {
    // "id": 3,
    "cpfOrCnpj": "45678123000100",
    "producerName": "Carlos Souza",
    "farmName": "Fazenda Rio Verde",
    "city": "Uberlândia",
    "state": "MG",
    "slug": "carlos-souza",
    "totalAreaFarm": 1800,
    "vegetationArea": 600,
    "cropsPlanted": ["Milho", "Feijão"]
  },
  {
    // "id": 4,
    "cpfOrCnpj": "23456789000111",
    "producerName": "Ana Pereira",
    "farmName": "Fazenda Bela Vista",
    "city": "Goiânia",
    "state": "GO",
    "slug": "ana-pereira",
    "totalAreaFarm": 2500,
    "vegetationArea": 1200,
    "cropsPlanted": ["Algodão", "Milho"]
  },
  {
    // "id": 5,
    "cpfOrCnpj": "34567890000",
    "producerName": "Paulo Fernandes",
    "farmName": "Fazenda Lagoa Azul",
    "city": "Curitiba",
    "state": "PR",
    "slug": "paulo-fernandes",
    "totalAreaFarm": 1200,
    "vegetationArea": 400,
    "cropsPlanted": ["Trigo", "Soja"]
  }
]


