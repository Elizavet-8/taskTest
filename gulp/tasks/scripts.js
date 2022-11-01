import webpackStream from 'webpack-stream';
import TerserPlugin from 'terser-webpack-plugin';

export const scripts = () => {
	return app.gulp
		.src(app.path.sourse.scripts, {
			sourcemaps: app.isDev,
		})
		.pipe(
			webpackStream({
				mode: app.isBuild ? 'production' : 'development',
				entry: {
					general: app.path.sourse.scripts,
				},
				output: {
					filename: app.isBuild ? '[name].min.js' : '[name].js',
				},
				module: {
					rules: [
						{
							test: /\.js$/,
							use: {
								loader: 'babel-loader',
							},
						},
					],
				},
				resolve: {
					modules: ['node_modules'],
					extensions: ['.js', '.json', '.jsx', '.css'],
				},
				optimization: {
					// splitChunks: {
					// 	cacheGroups: {
					// 		vendor: {
					// 			test: /node_modules/,
					// 			chunks: 'initial',
					// 			name: 'vendor',
					// 			enforce: true,
					// 		},
					// 	},
					// },
					minimizer: [
						new TerserPlugin({
							extractComments: false,
						}),
					],
				},
			})
		)
		.pipe(app.gulp.dest(app.path.build.scripts))
		.pipe(app.plugins.browserSync.stream());
};
