// TODO Make own service for Cors-Anywhere via vercel 
//      Make environment variable for this
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

export async function fetchExternal(resource:string, init?:RequestInit) : Promise<Response> {
  const data = await fetch(`${CORS_PROXY}${resource}`, init)
  return await data.json();
}