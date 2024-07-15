/** @type {import('next').NextConfig} */
const nextConfig = {};

import dns from "dns";

// Set DNS resolution to prefer IPv4 over IPv6
dns.setDefaultResultOrder("ipv4first");

// Rest of your application code


export default nextConfig;
