import { headers, cookies } from "next/headers"

export async function GET(request) {
   
    const headerList = await headers()
    const cookiesStore = await cookies()
    // const requestHeaders = new Headers(request.headers)
    console.log(headerList.get("Authorization"))

    const jwt = request.cookies.get("jwt")
    console.log(jwt)

    cookiesStore.set("Theme", "Black and Red")
     console.log(cookiesStore.get("Theme"))

    return new Response("<h2>Welcome to profile version 2</h2>", {
        headers:{
            "Content-Type": "text/html",
            "Set-Cookie":"jwt=123sdjhjdknfklmdl"
        }
    })
    
}