по домашке
У вас есть бекенд
Формат данных который должен быть в файле data.txt  
[
 {
    id: 1,
    name: "Ivan"
 }, ... ]
Задача 

1 При инициализации ( запуске) бекенд проекта - должен создаваться файл data.txt

2 При запросе GET '/items' - из файла должны вычитываться данные и отдаваться как респонс этого запроса

3 При запросе POST '/items' c пейлоадом запроса {name: 'Alex'} в файле к существующим данным должны добавляться указанные

4 При запросе PUT '/items/1' c пейлоадом запроса {name: 'Alex'} в файле меняет поле name на то которыое мы передали для обьекта с id = 1

5 При запросе DELETE '/items/1'  удаляет из файла обьекта с id = 1