const path = require('path');

module.exports = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.module.rules.push({
                test: /\.spec\.(js|jsx|ts|tsx)$/,
                use: 'null-loader',
            });
        }
        return config;
    },
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};