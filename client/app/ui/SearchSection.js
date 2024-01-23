'use client'

export default function SearchSection() {
    return (
        <main className="min-w-[300px] my-5">
            <div className="flex gap-4 justify-start bg-black p-2 rounded-xl px-4">
                <div>
                    <img src="/search.svg" alt="serach icon" className="invert"/>
                </div>
                <div>
                    <input placeholder="search" className="bg-black text-white border-none focus:outline-none"/>
                </div>
            </div>
        </main>
    )
}