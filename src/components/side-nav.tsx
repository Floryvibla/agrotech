'use client'

import { menus } from '@/mocks/constants'
import clsx from 'clsx'
import { LogOut, TreePalm } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export function SideNav() {

    const pathname = usePathname()

  return (
    <div className='xl:w-[200px] w-full xl:h-[98vh] xl:bg-slate-50 rounded p-2 space-y-2 flex flex-col '>
        <div className='
            w-full h-[60px] xl:h-[120px] bg-green-700 rounded text-white font-extralight text-2xl p-2
        '>
            <Link href={'/dashboard'} className='h-full flex items-end gap-1'>
                <TreePalm size={35}/>
                <h1>Agrotech</h1>
            </Link>
        </div>
        <div className='flex-1'>
            <ul className='xl:space-y-2 gap-2 xl:gap-0 flex xl:flex-col w-full items-center'>
                {menus.map(i => {
                    const Icon = i.icon
                    return (
                        <li key={i.href} className={
                            clsx(
                                'xl:p-3 p-1 xl:w-full text-xs xl:text-sm rounded hover:text-green-700 flex-1 xl:flex-none bg-slate-50 h-full',
                                {
                                    'bg-green-50 text-green-700': pathname === i.href
                                }
                            )}
                        >
                            <Link href={i.href} className='flex xl:flex-row items-center flex-col gap-2'>
                                <Icon size={16} />  {i.name}
                            </Link>
                        </li>
                    )
                })}
                <li className='xl:hidden p-2 rounded bg-slate-50 h-full'>
                    <button className='flex flex-col p-1 text-sm rounded hover:text-green-700 gap-2 items-center'>
                        <LogOut/>
                        {/* Sair */}
                    </button>
                </li>
            </ul>
        </div>
        <div className='border-t xl:block hidden'>
            <button className='flex p-3 text-sm rounded hover:text-green-700 gap-2 items-center'>
                <LogOut/> Sair
            </button>
        </div>
    </div>
  )
}
