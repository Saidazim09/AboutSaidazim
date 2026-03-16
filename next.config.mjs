/** @type {import('next').Next.jsConfig} */
const nextConfig = {
  output: 'export', // Saytni statik fayllarga aylantirish uchun shart!
  images: {
    unoptimized: true, // GitHub Pages-da rasmlar xato bermasligi uchun
  },
};

export default nextConfig;