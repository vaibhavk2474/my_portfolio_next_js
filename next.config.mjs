/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.licdn.com",
				pathname: "/dms/image/**",
			},
		],
	},
	experimental: {
		serverComponentsExternalPackages: ["sanitize-html", "htmlparser2"],
	},
};

export default nextConfig;
