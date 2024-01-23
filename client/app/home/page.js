'use client'

import CraftCard from "../ui/craftCard"
import TopBar from "../ui/TopBar"
export default function Home() {
    return (
        <main className="overflow-hidden h-full">
            <div className="fixed text-white flex  gap-8 backdrop-blur-sm p-3 softBlack">
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