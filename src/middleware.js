import { NextResponse } from "next/server";

export function middleware(request) {

  const response = NextResponse.next();

  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "default");
  }

  response.headers.set("Authorization", "Bearer Token");

  console.log(response.headers.get("Autorization"))

  return response;

  // return NextResponse.redirect(new URL("/", request.url))

  // if(request.nextUrl.pathname === "/profile"){
  // // return NextResponse.redirect(new URL("/about", request.nextUrl))
  // return NextResponse.rewrite(new URL("/about", request.nextUrl))

  // }
}

// export const config = {
//     matcher: "/profile"
// }

