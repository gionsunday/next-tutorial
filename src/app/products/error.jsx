"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"


const Error = ({ error, reset }) => {

    const router = useRouter();
    
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    }
    return (
        <div className=" flex flex-col">
            {error.message}
            <button onClick={reload} className="bg-red-500 w-[200px] p-2 text-base rounded-full">
                Try Again
            </button>
        </div>
    )
}

export default Error