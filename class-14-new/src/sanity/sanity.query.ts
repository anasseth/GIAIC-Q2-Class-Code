import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function GetMovieData() {
    return sanityClient.fetch(
        groq`
        *[_type=="movie"]{
  name,
    description,
    "imageURL": thumbnail.asset->url
}
        `
    )
}