'use client'
import { keania, krub } from '../fonts'
import { navLinks } from '../lib/navLinks'


import Link from 'next/link'

export default function Sidebar() {

    const SidebarItems = () => {
        return (
            <div className={`text-gray-600 gap-4 flex flex-col ${krub.className}`}>
                { 
                    navLinks.map((element) => {
                        return (
                            <Link href={element.link}>
                                <div className='flex gap-2 items-center border-b-2 border-gray-500 pb-4'>
                                    <div><img src={element.img} alt={element.name}/></div>
                                    <h1 className='text-2xl font-medium'>{element.name}</h1>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className='bg-gray-50'>
            <div className='text-4xl text-white bg-black h-[170px] flex items-end p-5'>
                <div className={`${keania.className}`}>
                    <span className='text-[55px]'>N</span>
                    exus
                </div>
           </div>

           <div className='p-5'>
                <div className='pr-5'>
                    <SidebarItems/>
                </div>
           </div>
        </div>
    )
}