'use client'
import { keania } from '../fonts'

import React from 'react'

export default function Sidebar() {
    return (
        <div>
            <div className='text-4xl text-white bg-black h-[170px] flex items-end p-5'>
                <div className={`${keania.className}`}>
                    <span className='text-[55px]'>N</span>
                    exus
                </div>
           </div>
        </div>
    )
}