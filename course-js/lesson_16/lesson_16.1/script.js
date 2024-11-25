// Конструктор для создания объекта Студент
function Student(firstName, lastName, yearOfBirth) {
    // Имя студента
    this.firstName = firstName;
    // Фамилия студента
    this.lastName = lastName;
    // Год рождения студента
    this.yearOfBirth = yearOfBirth;
    // Массив оценок
    this.grades = [];
    // Массив посещаемости, изначально содержит 25 пустых элементов (undefined)
    this.attendance = new Array(25).fill(undefined);

    // Метод для добавления оценки
    this.addGrade = function(grade) {
        this.grades.push(grade);
    };

    // Метод для получения возраста студента
    this.getAge = function() {
        const currentYear = new Date().getFullYear(); // Получаем текущий год
        return currentYear - this.yearOfBirth; // Вычисляем возраст студента
    };
    

    // Метод для вычисления среднего балла
    this.getAverageGrade = function() {
        const total = this.grades.reduce((acc, grade) => acc + grade, 0); // Вычисляем сумму всех оценок
        return total / this.grades.length; // Возвращаем средний балл
    };
    

    // Метод для отметки присутствия (true) в массиве посещаемости
    this.present = function() {
        // Ищем первый незаполненный элемент и устанавливаем его в true
        const index = this.attendance.indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log('Все занятия отмечены.');
        }
    };

    // Метод для отметки отсутствия (false) в массиве посещаемости
    this.absent = function() {
        // Ищем первый незаполненный элемент и устанавливаем его в false
        const index = this.attendance.indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log('Все занятия отмечены.');
        }
    };

    // Метод для вычисления средней посещаемости
    this.getAverageAttendance = function() {
        const attendedClasses = this.attendance.filter(attended => attended === true).length;
        const totalClasses = this.attendance.filter(attended => attended !== undefined).length;
        return attendedClasses / totalClasses;
    };

    // Метод для вывода итоговой оценки
    this.summary = function() {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this.getAverageAttendance();

        if (averageGrade > 90 && averageAttendance > 0.9) {
            return "Молодец!";
        } else if (averageGrade > 90 || averageAttendance > 0.9) {
            return "Хорошо, но можно лучше";
        } else {
            return "Редиска!";
        }
    };
}

// Создаем несколько экземпляров студентов
const student1 = new Student('Иван', 'Иванов', 2000);
const student2 = new Student('Мария', 'Петрова', 2001);
const student3 = new Student('Алексей', 'Сидоров', 1999);

// Пример использования методов
student1.addGrade(95);
student1.addGrade(85);
student1.present();
student1.present();
student1.absent();
console.log(student1.summary()); // Вывод: "Хорошо, но можно лучше"

student2.addGrade(92);
student2.addGrade(91);
student2.present();
student2.present();
student2.present();
console.log(student2.summary()); // Вывод: "Молодец!"

student3.addGrade(70);
student3.addGrade(65);
student3.absent();
student3.absent();
student3.absent();
console.log(student3.summary()); // Вывод: "Редиска!"
