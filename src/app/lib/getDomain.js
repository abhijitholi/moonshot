export default function getDomain() {
    // Determine the protocol based on the environment
    const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http";
    
    // Determine the domain based on the environment variable, defaulting to localhost for development
    const domain = process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : "localhost:3000";
    
    // Return the full domain URL
    return `${protocol}://${domain}`;
}
