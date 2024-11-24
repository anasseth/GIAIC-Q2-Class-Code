import { BLOG_DATA } from "./data";

export async function GET(){
    return new Response(JSON.stringify(BLOG_DATA))
}


















