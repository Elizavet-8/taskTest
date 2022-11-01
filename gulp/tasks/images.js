import createWebp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => {
	return app.gulp
		.src(app.path.sourse.images)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.if(
				app.isBuild,
				imagemin({
					progressive: true,
					interlaced: true,
					optimizationLevel: 3,
					svgoPlugins: [
						{
							removeViewBox: false,
						},
					],
				})
			)
		)
		.pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
		.pipe(app.plugins.if(app.isBuild, createWebp()))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());
};
