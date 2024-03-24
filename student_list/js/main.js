import Student from "./student.js";
// const igor = new Student('Игорь', 'Алексеевич', 'Попов', new Date(1992, 2, 21), 2011);

let students = [
    new Student('Игорь', 'Алексеевич', 'Попов', new Date(1992, 2, 21), 2011, 'Исторический'),
    new Student('Олег', 'Николаевич', 'Антонов', new Date(1987, 0, 11), 2019, 'Юридичечкий'),
    new Student('Юрий', 'Сергеевич', 'Ульянов', new Date(1999, 4, 20), 2010, 'Филосовский'),
];

const $studentList = document.getElementById('students-list');

function newStudentTR(student) {
    const $studentTR = document.createElement('tr'),
        $fioTD = document.createElement('td'),
        $facultyTD = document.createElement('td'),
        $birthDayTD = document.createElement('td'),
        $yearsLerningTD = document.createElement('td')

        $fioTD.textContent = student.getFIO();
        $facultyTD.textContent = student.faculty;
        $birthDayTD.textContent = `${student.getBirthDayString()} (${student.getAge()} лет)`;
        $yearsLerningTD.textContent = `'${student.yearOfEntry} - ${new Date().getFullYear()}' `

    $studentTR.append($fioTD)
    $studentTR.append($facultyTD)
    $studentTR.append($birthDayTD)
    $studentTR.append($yearsLerningTD)

    return $studentTR
}

function render() {
    const studentsCopy = [...students];
    for (const student of studentsCopy) {

        $studentList.append(newStudentTR(student))
        console.log(student);
    }
}

render();
//for (const student of students) {
   //console.log(student.getBirthDayString(), student.getAge(), student.getlernPeriod(), student.getFIO());
//}


