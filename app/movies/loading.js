import React from 'react'

export default function Loading() {
    return (
        <div className='text-white'>
            <p className='text-3xl'>Loading...</p>
            <ul className='list-disc pl-6 mt-4 space-y-2 list-none'>
                {[...Array(20).keys()].map(i => (
                    <li key={i}>
                        <span
                            className='inline-block h-5 animate-pulse w-72 bg-zinc-700'
                            style={{
                                animationDelay: `${i * 0.05}s`,
                                animationDuration: '1s'
                            }}

                        />
                    </li>
                ))}
            </ul>
        </div>

    )
}
