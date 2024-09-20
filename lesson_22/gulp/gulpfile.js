const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const paths = {
    styles: {
        src: './src/scss/**/*.scss',
        dist: './dist/css' // Исправлено на dist
    },
    html: {
        src: './src/*.html',
        dist: './dist/' // Исправлено на dist
    },
    script: {
        src: './src/js/**/*.js',
        dist: './dist/js/' // Исправлено на dist
    }
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', function (err) {
            console.error('Ошибка в SCSS компиляции:', err.message); // Логирование ошибок
            this.emit('end');
        }))
        .pipe(cleanCSS())
        .on('error', function(err) {
            console.error('Ошибка при минификации CSS:', err.message); // Логирование ошибок
        })
        .pipe(gulp.dest(paths.styles.dist)) // Должен создать папку css в dist
        .on('end', () => console.log('CSS сохранен в', paths.styles.dist)) // Логирование успешного завершения
        .pipe(browserSync.stream());
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dist)) // Исправлено на dist
        .pipe(browserSync.stream());
}

function script() {
    return gulp.src(paths.script.src)
        .pipe(concat('main.js')) // Исправлено на строку 'main.js'
        .pipe(terser()) // Минификация ES6+
        .pipe(gulp.dest(paths.script.dist)) // Исправлено на dist
        .pipe(browserSync.stream()); // Исправлено pipr на pipe
}

function watch() {
    browserSync.init({
        server: { baseDir: './dist/' } // Исправлено на server
    });
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.script.src, script);
}

exports.styles = styles;
exports.script = script; 
exports.html = html;
exports.watch = watch;


exports.default = gulp.series(
    gulp.parallel(styles, script, html),
    watch // Наблюдение за файлами после выполнения задач
);

