// Импортируем необходимые модули
const gulp = require('gulp'); // Основная библиотека Gulp
const sass = require('gulp-sass')(require('sass')); // Компиляция SCSS в CSS
const cleanCSS = require('gulp-clean-css'); // Минификация CSS
const terser = require('gulp-terser'); // Минификация JavaScript
const concat = require('gulp-concat'); // Объединение файлов JS в один
const browserSync = require('browser-sync').create(); // Локальный сервер для автоматической перезагрузки страницы

// Определяем пути к исходным файлам и директориям для дистрибуции
const paths = {
    styles: {
        src: './src/scss/**/*.scss', // Все SCSS файлы в папке src/scss
        dist: './dist/css' // Папка для скомпилированных и минифицированных CSS файлов
    },
    html: {
        src: './src/*.html', // Все HTML файлы в папке src
        dist: './dist/' // Папка для готовых HTML файлов
    },
    script: {
        src: './src/js/**/*.js', // Все JS файлы в папке src/js
        dist: './dist/js/' // Папка для объединённых и минифицированных JS файлов
    }
}

// Функция для обработки стилей (SCSS -> CSS)
function styles() {
    return gulp.src(paths.styles.src) // Берём все SCSS файлы
        .pipe(sass().on('error', function (err) {
            console.error('Ошибка в SCSS компиляции:', err.message); // Ловим ошибки в SCSS компиляции
            this.emit('end');
        }))
        .pipe(cleanCSS()) // Минифицируем CSS
        .on('error', function(err) {
            console.error('Ошибка при минификации CSS:', err.message); // Ловим ошибки минификации
        })
        .pipe(gulp.dest(paths.styles.dist)) // Сохраняем результат в папку dist/css
        .on('end', () => console.log('CSS сохранен в', paths.styles.dist)) // Лог при успешном сохранении
        .pipe(browserSync.stream()); // Автоматическое обновление страницы
}

// Функция для обработки HTML файлов
function html() {
    return gulp.src(paths.html.src) // Берём все HTML файлы
        .pipe(gulp.dest(paths.html.dist)) // Копируем их в папку dist
        .pipe(browserSync.stream()); // Автоматическое обновление страницы
}

// Функция для обработки скриптов (JS)
function script() {
    return gulp.src(paths.script.src) // Берём все JS файлы
        .pipe(concat('main.js')) // Объединяем их в один файл main.js
        .pipe(terser()) // Минифицируем объединённый файл
        .pipe(gulp.dest(paths.script.dist)) // Сохраняем результат в папку dist/js
        .pipe(browserSync.stream()); // Автоматическое обновление страницы
}

// Функция для отслеживания изменений в файлах и запуска задач
function watch() {
    browserSync.init({
        server: { baseDir: './dist/' } // Настраиваем локальный сервер, корень — папка dist
    });
    gulp.watch(paths.styles.src, styles); // Отслеживаем изменения в SCSS и запускаем задачу styles
    gulp.watch(paths.html.src, html); // Отслеживаем изменения в HTML и запускаем задачу html
    gulp.watch(paths.script.src, script); // Отслеживаем изменения в JS и запускаем задачу script
}

// Экспортируем функции, чтобы их можно было запускать вручную из командной строки
exports.styles = styles;
exports.script = script; 
exports.html = html;
exports.watch = watch;

// Основная задача по умолчанию, которая запускает все процессы и отслеживание изменений
exports.default = gulp.series(
    gulp.parallel(styles, script, html), // Сначала параллельно запускаем задачи для стилей, скриптов и HTML
    watch // Затем запускаем watch для отслеживания изменений
);
