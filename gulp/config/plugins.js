import replace from 'gulp-replace';
import browserSync from 'browser-sync';
import gulpIf from 'gulp-if';
import rename from 'gulp-rename';
import newer from 'gulp-newer';

export const plugins = {
	replace: replace,
	if: gulpIf,
	rename: rename,
	newer: newer,
	browserSync: browserSync,
};
