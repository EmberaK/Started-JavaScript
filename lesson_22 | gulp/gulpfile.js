// import gulp from './node_modules/gulp';

import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';

// Инициализация BrowserSync
const bs = browserSync.create();

// Пути к исходным файлам и папкам
const paths = {
  styles: {
    src: 'src/sass/**/*.scss',  // Путь к исходным SCSS файлам
    dest: 'dist/css/'           // Куда сохранить готовые CSS файлы
  }
};

// Компиляция Sass в CSS, минификация и добавление префиксов
export function styles() {
  return gulp.src(paths.styles.src)        // Берём исходные файлы SCSS
    .pipe(sass().on('error', sass.logError))  // Компиляция в CSS с обработкой ошибок
    .pipe(autoprefixer({                      // Добавляем автопрефиксы
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())                         // Минифицируем CSS
    .pipe(gulp.dest(paths.styles.dest))       // Сохраняем минифицированные файлы в папку dist
    .pipe(bs.stream());                       // Обновляем стили в браузере без перезагрузки страницы
}

// Запуск BrowserSync и отслеживание изменений файлов
function watchFiles() {
  bs.init({
    server: {
      baseDir: "./"  // Папка, откуда будет запускаться сервер (корень проекта)
    }
  });

  // Отслеживание изменений в SCSS и HTML
  gulp.watch(paths.styles.src, styles);         // Следим за изменениями в SCSS-файлах
  gulp.watch("./*.html").on('change', bs.reload); // Следим за изменениями в HTML и перезагружаем браузер
}

// Определяем стандартную задачу Gulp
const watch = gulp.series(styles, watchFiles);

export default watch;


