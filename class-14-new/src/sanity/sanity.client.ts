import { createClient, type ClientConfig } from "next-sanity";

const SanityClient: ClientConfig = {
    projectId: "kn4xk1pb",
    dataset: "production",
    apiVersion: "2024-12-22",
    useCdn: false
}

export default createClient(SanityClient);