﻿const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");


gulp.task("passthrough-object.min.js", () => {
  return gulp.src([
      "sources/passthrough-object.js"
    ])
    .pipe(concat("passthrough-object.min.js"))
    .pipe(uglify())
    .on("error", function(err) { console.error(err.toString()); })
    .pipe(gulp.dest("./distrib"))
});

gulp.task("default", ["passthrough-object.min.js"]);


gulp.task("all", ["default"]);