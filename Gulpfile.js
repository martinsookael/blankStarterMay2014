var gulp = require('gulp');

var lr;

var EXPRESS_ROOT = __dirname;


function startLivereload() {
  lr = require('tiny-lr')();
  lr.listen(35729);
}

function notifyLivereload(event) {

  // `gulp.watch()` events provide an absolute path
  // so we need to make it relative to the server root
  var fileName = require('path').relative(EXPRESS_ROOT, event.path);

  lr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('default', function () {
  startLivereload();
  gulp.watch('./public/*.html', notifyLivereload);
});
