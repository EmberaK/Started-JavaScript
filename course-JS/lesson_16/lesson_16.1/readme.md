Task on ukr:
Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.

Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.

Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.






Task on eng:
You need to create a constructor for the entity 'Student'. The Student has a first name, last name, and year of birth—these are properties. There is an array of grades, which is also a property. There should also be methods to get the student's age and their average grade.

Additionally, all Students have an array of the same length, containing 25 elements. Initially, it is not filled but has 25 slots. This array is used to track attendance: each time we call the method .present(), a true is recorded in the next empty slot in the array; when we call .absent(), a false is recorded. You should ensure that the attendance array cannot have more than 25 records. The array is a property, and .present() and .absent() are methods.

The final method, .summary(), checks the average grade and average attendance (number of attendances/number of classes). If the average grade is above 90 and the average attendance is above 0.9, the .summary() method returns the string 'Well done!'; if one of these values is lower, it returns 'Good, but could be better'; if both are lower, it returns 'Slacker!'.

Don’t forget, after you write this constructor, to create 2-3 instances (specific students) and demonstrate the use of these methods.