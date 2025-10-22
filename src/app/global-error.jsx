"use client"

import "./globals.css"

export default function GlobalError({error}){
  console.log("Global error:", error);
    return(
        <html>
            <body>
                <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Somthing went wrong!</h2>
                  <button 
                  onClick={() =>{
                    window.location.reload()
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[25px]">
                    Refresh
                  </button>
                </div>
            </body>
        </html>
    )
}