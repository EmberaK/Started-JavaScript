Конспект по webpack(официальный сайт: https://webpack.js.org/):

1. Нужно создать package.json:
    npm init -y
2. Скачиваем webpack и его консольные команды: 
    npm i -D webpack webpack-cli
3. В файле package.json заменяем строку 8
    с "test": "echo \"Error: no test specified\" && exit 1"
    на "build": "./node_modules/.bin/webpack" (или "build": "webpack") - это прописывает путь к бинарному файлу, где находиться webpack
4. Создам файл webpack.config.js и прописываем где должны сохраняться js файлы и куда переобразовываться, пример: 
    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
    };
5. Стоит в webpack.config.js после 3-й строки дописать(что подходит для вас): 
    - mode: 'development' - для разработки, с включёнными Source Maps и быстрыми сборками,
    - mode: 'production' - для финальной сборки, с минификацией и оптимизацией кода
6. Cтоит в webpack.config.js после 5-й строки дописать(что из свойств devtool подходит для вас, но для меня это):
    devtool: 'eval-source-map',