'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx'
import { navLinks } from '../lib/navLinks';
import { keania } from '../fonts';


export default function NavBar() {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen((prev) => !prev)
    }

    const NavItems = () => {
        return (
            <div className={`${keania.className} flex flex-col gap-5 px-14 pb-10` }>
                {   // implement clsx styling here.
                    navLinks.map((element) => (
                        <Link href={element.link} key={element.name}>
                            <div className='flex gap-1 text-2xl font-medium items-center justify-center sm:justify-start border-b border-b-white pb-2'>
                                <div>{element.name}</div> 
                            </div>
                        </Link>
                    ))
                }
            </div>
        )
    }

    const Drawer = ()=> {
        return (
            <div>
                <header>
                    <div>
                        <img alt='close menu'/>
                    </div>

                    <div>
                        <NavItems/>
                    </div>
                </header>
            </div>
        )
    }


    return (
        <main className='bg-black text-white'>
            <nav className='flex items-center gap-2 text-2xl font-bold text-white bg-black py-1 px-2'>
                <div className=''
                    onClick={handleDrawerToggle}
                >
                    <Image src='/menu.svg' alt='menu' width={30} height={35} />
                </div>
                <div className={`${keania.className} text-xl`}>
                    <span className='text-4xl'>N</span>exus
                </div>
            </nav>
            <div className='hidden'>
                <NavItems/>
            </div>
            <div className={clsx(
                {
                    "hidden" : !isDrawerOpen
                }
            )}>
                <Drawer/>
            </div>
        </main>
    )
}