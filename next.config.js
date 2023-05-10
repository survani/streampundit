/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['static-cdn.jtvnw.net'],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
