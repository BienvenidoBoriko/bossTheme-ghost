const { src, dest, series, parallel } = require('gulp');
const sass = require('gulp-dart-scss');
const pleeease = require('gulp-pleeease');
const rename = require('gulp-rename');

function build_css() {
    return src("assets/scss/main.scss")
        .pipe(sass())
        .pipe(pleeease())
        .pipe(
            rename({
                basename: "main",
                suffix: ".min",
                extname: ".css"
            }))
        .pipe(dest('assets/css/'));
}

// Esto copia más JS del necesario.
// Más adelante hablamos de Bootstrap y JS
function mover_js() {
    return src(['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            'node_modules/jquery/dist/jquery.min.js'
        ])
        .pipe(dest('assets/js/'));
}

// Estas son las tareas que se van a poder ejecutar
exports.build_css = build_css;
exports.mover_js = mover_js;
exports.default = parallel(build_css, mover_js);
// Fin de gulpfile.js