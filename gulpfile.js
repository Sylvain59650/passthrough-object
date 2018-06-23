const gulp = require("gulp");
const concat = require("gulp-concat");
const babel = require("gulp-babel");

gulp.task("passthrough-object.min.js", () => {
  return gulp.src([
      "sources/passthrough-object.js"
    ])
    .pipe(concat("passthrough-object.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true,
      minified: true,
      comments: false,
      plugins: ["minify-mangle-names"]
    }))
    .pipe(gulp.dest("./distrib"))
});


gulp.task("demo", () => {
  return gulp.src([
      "sources/passthrough-object.js"
    ])
    .pipe(concat("passthrough-object.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      minified: true,
      comments: false,
      plugins: ["minify-mangle-names"]
    }))
    .pipe(gulp.dest("./docs/demo/modules/passthrough-object/distrib/"))
});

gulp.task("default", ["passthrough-object.min.js", "demo"]);