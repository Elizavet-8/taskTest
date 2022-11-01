export const server = (done) => {
	app.plugins.browserSync.init({
		server: {
			baseDir: app.path.build.pages,
		},
		notify: false,
		port: 3000,
	});
};
