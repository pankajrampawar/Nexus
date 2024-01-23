'use client'

import React from 'react';
import Image from 'next/image';
import { inter, roboto } from '../fonts';

export default function CraftCard() {
    return (
        <main className='bg-gray-100 p-2 flex flex-col gap-2 my-2 border-y border-black max-w-[650px]'>
            <section className='flex gap-2'>
                <div className='min-w-[40px]'>
                    <div className='w-auto h-auto'>
                        <Image
                            src='/profile.png'
                            alt='profile Image of pankaj'
                            width={40}
                            height={40}
                            quality={20}

                            className='rounded-xl w-auto h-auto'
                        />
                    </div>
                </div>
                
                <div className='flex flex-col gap-2'>
                    <header>
                        <div>
                            <h1 className={`text-base font-bold ${inter.className}`}>Name Surname</h1>
                            <h3 className='text-xs'>VESIT</h3>
                        </div>
                    </header>

                    <article>
                        <div className='max-h-[86px] overflow-clip'>
                            <p className={` text-sm ${roboto.className}`}>this is the test message for teh working of this thing and wer are excited to work on this projecct for as much tim as possibl ean tehr is not ed to haoe doep this can go wer are wkin and excited and se to</p>
                        </div>
                        <div className={`text-blue-400 text-md underline underline-offset-4 ${roboto.className}`}>See More</div>
                    </article>
                </div>
            </section>

            <section className='flex justify-between border-t border-gray-400 pt-3'>
                <div className='flex gap-2 '>
                    <div><img src='/like.svg' alt='like'/></div>
                    <div><img src='/dislike.svg' alt='dislike'/></div>
                </div>

                <div className=''>
                    <input placeholder='respond' className='border rounded-lg bg-gray-200 w-auto px-2' />
                </div>

                <div className=' flex gap-2'>
                    <div> <img src='/recraft.svg' alt='recraft'/> </div>
                    <div> <img src='/more.svg' alt='more' /> </div>
                </div>
            </section>
        </main>
    )
}