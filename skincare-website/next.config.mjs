/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, // Nodig omdat we geen actieve Next-server hebben voor plaatjes
  },
};
export default nextConfig;