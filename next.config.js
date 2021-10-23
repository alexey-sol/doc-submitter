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
    webpack(config, { dev }) {
        if (dev) {
            config.devtool = "cheap-module-source-map"; // eslint-disable-line
        }

        return config;
    },
};
