/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    output: "export",
    images: { unoptimized: true } ,
    compiler:{
        removeConsole: true,
    }
};

module.exports = withContentlayer({ ...nextConfig });
