function Student(name, surname, age,course) {
  this.name = name;
  this.surname = surname;
  this.age = new Date().getFullYear() -age;
  this.marks = [];
  this.attendance = [];
  this.course = course;
  this.totalLectures = this.course*20;// Припустимо,що в кожному курсі 20 лекцій
}
// Додавання оцінки 
Student.prototype.addMark = function (mark)
{
    if (mark >= 0 && mark <= 10) {
    this.marks.push(mark);
    return true;
  } else {
    return false; // Повертаємо false, якщо оцінка недійсна
  }
  
};
//Середня оцінка
Student.prototype.calculateAverageSuccess = function ()
{
  let averageSuccess = 0;
  if (this.marks.length === 0)
    {
      return 0;
    }
  for (let i = 0; i < this.marks.length; i++)
    {
      averageSuccess += this.marks[i];
    }
    return averageSuccess / this.marks.length;
};

// Додавання відвідуваності 
Student.prototype.addAttendance = function (attended)
{
  if (attended === true || attended === false)
    {
      this.attendance.push(attended);
      return true;
    }
  else
    {
      return false; 
    }
};

Student.prototype.calculateAverageAttendance = function ()
{
  let attendedCount = 0;
  if (this.attendance.length === 0)
    {
      return 0; 
  }
  for (let i = 0; i < this.attendance.length; i++)
    {
       attendedCount+= this.attendance[i];
    }
    return ( attendedCount / this.attendance.length)*100;
}

// Отримати кількість пройдених занять
Student.prototype.getLecturesAttended = function ()
{
  return this.attendance.filter(attended => attended === true).length;
};

// Змінити курс
Student.prototype.changeCourse = function (newCourse) {
  this.course = newCourse;
  this.totalLectures = this.course * 20; // Оновлюємо кількість лекцій
};


Student.prototype.getStudentInfo = function ()
{
  return `
    Ім'я: ${this.name}
    Прізвище: ${this.surname}
    Вік: ${this.age}
    Курс: ${this.course}
    Оцінки: ${this.marks.join(', ')}
    Відвідуваність: ${this.attendance.map(attended => attended ? 'відвідав' : 'не відвідав').join(', ')}
    Середній бал: ${this.calculateAverageSuccess()}
    Середня відвідуваність: ${this.calculateAverageAttendance()}%
    Кількість пройдених занять: ${this.getLecturesAttended()} / ${this.totalLectures}
  `;
};


const student = new Student('Switty', 'Chocolate', 2000, 1);

console.log(student.getStudentInfo());

student.addMark(8);
student.addMark(9);
student.addAttendance(true);
student.addAttendance(true);
student.changeCourse(2);

console.log(student.getStudentInfo());
