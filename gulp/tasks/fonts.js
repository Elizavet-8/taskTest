import fonter from 'gulp-fonter';
import createWoff2 from 'gulp-ttf2woff2';

export const fonts = () => {
	return app.gulp
		.src(app.path.sourse.fonts)
		.pipe(
			app.plugins.if(
				app.isBuild,
				fonter({
					formats: ['otf', 'woff', 'ttf'],
				})
			)
		)
		.pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.fonts)))
		.pipe(app.plugins.if(app.isBuild, createWoff2()))
		.pipe(app.gulp.dest(app.path.build.fonts));
};
