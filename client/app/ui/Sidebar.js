'use client'
import { keania, krub } from '../fonts'
import { navLinks } from '../lib/navLinks'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'


import Link from 'next/link'

export default function Sidebar() {

    const pathname = usePathname();
    console.log(pathname)

    const SidebarItems = () => {
        return (
            <div className={`text-gray-500 gap-4 flex flex-col min-w-full ${krub.className}`}>
                { 
                    navLinks.map((element) => {
                        return (
                            <Link href={element.link} key={element.name}>
                                <div className={clsx('flex gap-2 items-center pb-4',
                                    {
                                        'text-black border-b-2 border-black' : pathname === "/" + element.link
                                    }
                                )}>
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
        <div className='bg-gray-100 h-full min-w-full'>
            <div className='text-4xl text-white bg-black h-[170px] flex items-end p-5'>
                <div className={`${keania.className}`}>
                    <span className='text-[55px]'>N</span>
                    exus
                </div>
           </div>

           <div className='p-5 pl-2 md:pl-6'>
                <div className='pr-5'>
                    <SidebarItems/>
                </div>
           </div>
        </div>
    )
}