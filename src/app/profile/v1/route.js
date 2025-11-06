import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  redirect("/profile/v2")

  // const headerList = await headers()
  
  // console.log(headerList.get("Authorization"))

  // const cookiesStore = await cookies()

  // const requestHeaders = new Headers(request.headers);

  // const token = requestHeaders.get("Authorization");

  // console.log(requestHeaders.get("User-Agent"));


  // const jwt = request.cookies.get("jwt")
  // console.log(jwt)

  // cookiesStore.set("Theme", "Black and Red")
  // console.log(cookiesStore.get("Theme"))

  return new Response("<h1> Welcome to profile </h1>" , {
    headers:{
      "Content-Type":"text/html",
       "Set-Cookie": "jwt=kndkhfdlkhdklfhlerer"
    }
  });

  // return new Response("<h2>Welcome to profile</h2>", {
  //     headers:{
  //         "Content-Type": "text/html",
  //         "Set-Cookie":"jwt=123sdjhjdknfklmdl"
  //     }
  // })
}
