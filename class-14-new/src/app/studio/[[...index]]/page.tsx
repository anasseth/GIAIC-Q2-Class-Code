"use client"
import { SanityConfig } from "@/sanity/sanity.config"
import { NextStudio } from "next-sanity/studio"

export default function SanityStudio(){
    return (<NextStudio config={SanityConfig} />)
}
