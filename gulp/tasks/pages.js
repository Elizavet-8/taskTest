import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import versionNumber from 'gulp-version-number';
import pug from 'gulp-pug';

export const pages = () => {
	return app.gulp
		.src(app.path.sourse.pages)
		.pipe(
			app.plugins.if(
				app.path.config.pug,
				pug({
					pretty: app.isBuild,
					verbose: app.isDev,
				})
			)
		)
		.pipe(
			fileInclude({
				basepath: app.path.config.sourseFolder,
			})
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				versionNumber({
					value: '%DT%',
					append: {
						key: '_v',
						cover: 0,
						to: ['css', 'js'],
					},
				})
			)
		)
		.pipe(app.plugins.if(app.isBuild, app.plugins.replace('.css', '.min.css')))
		.pipe(app.plugins.if(app.isBuild, app.plugins.replace('.js', '.min.js')))
		.pipe(
			app.plugins.if(
				app.isBuild,
				htmlmin({
					collapseWhitespace: true,
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.pages))
		.pipe(app.plugins.browserSync.stream());
};
