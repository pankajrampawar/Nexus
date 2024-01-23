'use client'

import React from 'react'
import { Kenia } from 'next/font/google'
import { keania } from '../fonts'

export default function TopBar() {
    return (
        <div className={`w-full h-full rounded-xl flex justify-between font-semibold tracking-wider text-lg ${keania.className}`}>
            <div className='flex-1  flex justify-center items-center p-2 cursor-pointer'>
                <div className='cursor-pointer'>
                    General
                </div>
            </div>
            <div className='flex-1  flex justify-center items-center p-2 softDarkBlack rounded-2xl cursor-pointer'>
                <div>
                    Hidden
                </div>
            </div>
            <div className='flex-1  flex justify-center items-center p-2 cursor-pointer'>
                <div>
                    Polls
                </div>
            </div>
        </div>
    )
}