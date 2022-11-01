/* Default settings */
import gulp from 'gulp';
import { defaultPath } from './gulp/config/default.js';
import { plugins } from './gulp/config/plugins.js';

/* Tasks */
import { reset } from './gulp/tasks/reset.js';
import { pages } from './gulp/tasks/pages.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';
import { scripts } from './gulp/tasks/scripts.js';
import { styles } from './gulp/tasks/styles.js';
import { server } from './gulp/tasks/server.js';

global.app = {
	gulp: gulp,
	plugins: plugins,
	isDev: process.argv.includes('--development'),
	isBuild: process.argv.includes('--production'),
};

async function setPath() {
	try {
		let { customPath } = await import('./gulp.config.js');
		app.path = customPath;
	} catch (error) {
		app.path = defaultPath;
	}
}

function watcher() {
	gulp.watch(app.path.watch.images, images);
	gulp.watch(app.path.watch.pages, pages);
	gulp.watch(app.path.watch.styles, styles);
	gulp.watch(app.path.watch.scripts, scripts);
}

gulp.task(
	'dev',
	gulp.series(
		setPath,
		reset,
		gulp.parallel(fonts, styles, pages, scripts, styles, images),
		gulp.parallel(server, watcher)
	)
);

gulp.task(
	'build',
	gulp.series(
		setPath,
		reset,
		gulp.parallel(fonts, styles, pages, scripts, styles, images)
	)
);
