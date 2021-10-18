/** @type {import('next').NextConfig} */
module.exports = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    async rewrites() {
        return [
            { // proxying to API
                source: "/:path*",
                destination: `${process.env.API_URL}/:path*`,
            },
        ];
    },
};
