const nextConfig = {
  webpack(config, { isServer }) {
    if (isServer) {
      config.optimization.splitChunks = false;
    }

    // Ensure we have a rule for SVG files and PDF files
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      }
    );

    return config;
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  swcMinify: true,
  compiler: {
    react: {
      throwIfNamespace: false,
    },
  },

  reactStrictMode: true,
};

export default nextConfig;
