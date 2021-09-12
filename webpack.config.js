const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					configFile: './tsconfig.json',
				},
			},
		],
	},
	resolve: {
		alias: {
			Utils: path.resolve(__dirname, 'src/utils/'),
			Components: path.resolve(__dirname, 'src/components'),
			Hooks: path.resolve(__dirname, 'src/hooks'),
			DI: path.resolve(__dirname, 'src/di'),
		},
	},
};
