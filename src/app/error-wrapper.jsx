"use client"

import "./globals.css"

import { useState } from "react"

const ErrorSimulator = ({ message = "An error occoured" }) => {
    const [error, setError] = useState(false)

    if (error) throw new Error(message)

    return (
         <button
         title="Simulate an error"
         className="bg-red-950 text-red-500 rounded p-1 font-semibold"
         onClick={() => setError(true)}
         >
            Simulate Error
         </button>
    )
}

export const  ErrorWrapper = ({children}) =>{
return (
    <div className="flex flex-col rounded-lg mt-8 border border-gray-700">
        <div>
            <ErrorSimulator message="Simulated error in root layout" />
        </div>
        {children}
    </div>
)
}
