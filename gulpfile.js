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
      compact: false,
      comments: false
    }))
    .pipe(gulp.dest("./distrib"))
});


gulp.task("demo", () => {
  return gulp.src([
      "sources/passthrough-object.js"
    ])
    .pipe(concat("passthrough-object.min.js"))
    .pipe(gulp.dest("./docs/node_modules/passthrough-object/distrib/"))
});

gulp.task("default", ["passthrough-object.min.js", "demo"]);


gulp.task("all", ["default"]);