/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		domains: ['13.51.196.116'],
		webpack(config) {
			config.module.rules.push({
				loader: '@svgr/webpack',
				issuer: /\.[jt]sx?$/,
				options: {
					prittier: false,
					svgo: true,
					svgoConfig: {
						plugins: [
							{
								name: 'preset-default',
								params: { override: { removeViewBox: false } }
							}
						]
					},
					titleProp: true
				},
				test: /\.svg$/
			});
			return config;
		}
	}
};

module.exports = nextConfig;
