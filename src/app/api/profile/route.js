
export async function  GET(request) {
    const requestHeaders = new Headers(request.headers)
    return new Response("Welcome to API Profile")
}