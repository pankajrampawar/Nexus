'use client'

import CraftCard from "../ui/craftCard"
import TopBar from "../ui/TopBar"
export default function Home() {
    return (
        <main className="overflow-hidden h-full relative">
            <div className="absolute text-white flex  gap-8 backdrop-blur-sm softBlack w-full rounded-xl">
                <TopBar/>
            </div>
            <div className="overflow-y-auto h-full">
                <CraftCard/>
                <CraftCard />
                <CraftCard />
                <CraftCard />
                <CraftCard />
                <CraftCard />
                <CraftCard />
                <CraftCard />
                <CraftCard />
            </div>
        </main>
    )
}