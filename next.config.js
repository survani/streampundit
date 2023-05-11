/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['static-cdn.jtvnw.net', 'robohash.org'],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
