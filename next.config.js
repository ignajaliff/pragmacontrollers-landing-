/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export 100% estático para deploy en Hostinger compartido.
  output: 'export',
  images: {
    // Sin optimización de imágenes: usamos <img> normales.
    unoptimized: true,
  },
  // Útil para servir desde subcarpetas / hosting estático.
  trailingSlash: true,
};

module.exports = nextConfig;
