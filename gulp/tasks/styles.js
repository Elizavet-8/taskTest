import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';
import groupMediaQueries from 'gulp-group-css-media-queries';

const sassConfig = gulpSass(dartSass);

export const styles = () => {
	return app.gulp
		.src(app.path.sourse.styles, {
			soursemaps: app.isDev,
		})
		.pipe(
			sassConfig({
				outlineStyle: app.isBuild ? 'expanded' : 'compressed',
			})
		)
		.pipe(app.plugins.if(app.isBuild, groupMediaQueries()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoPrefixer({
					grid: true,
					overideBrowserslist: ['last 5 versions'],
					cascade: true,
				})
			)
		)
		.pipe(app.plugins.if(app.isBuild, cleanCSS()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.plugins.rename({
					extname: '.min.css',
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.styles))
		.pipe(app.plugins.browserSync.stream());
};
