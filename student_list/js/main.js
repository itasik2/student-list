import Student from "./student.js";
// const igor = new Student('Игорь', 'Алексеевич', 'Попов', new Date(1992, 2, 21), 2011);

let students = [
    new Student('Игорь', 'Алексеевич', 'Попов', new Date(1992, 2, 21), 2021, 'Исторический'),
    new Student('Олег', 'Николаевич', 'Антонов', new Date(1987, 0, 11), 2020, 'Юридичечкий'),
    new Student('Юрий', 'Сергеевич', 'Ульянов', new Date(1999, 4, 20), 2022, 'Филосовский'),
];

const $studentList = document.getElementById('students-list'),
    $studentListData = document.querySelectorAll('table th');

let column = 'fio',
    columnDir = true;


function newStudentTR(student) {
    const $studentTR = document.createElement('tr'),
        $fioTD = document.createElement('td'),
        $facultyTD = document.createElement('td'),
        $birthDayTD = document.createElement('td'),
        $yearsLerningTD = document.createElement('td')

        $fioTD.textContent = student.fio;
        $facultyTD.textContent = student.faculty;
        $birthDayTD.textContent = `${student.getBirthDayString()} (${student.getAge()} лет)`;
        $yearsLerningTD.textContent = student.getlernPeriod();

    $studentTR.append($fioTD)
    $studentTR.append($facultyTD)
    $studentTR.append($birthDayTD)
    $studentTR.append($yearsLerningTD)

    return $studentTR
}

function getSortStudents(prop, dir) {
    const studentsCopy = [...students]
    return studentsCopy.sort(function(studentA, studentB) {
        if ((!dir == false ? studentA[prop] < studentB[prop] : studentA[prop] > studentB[prop]))
        return -1
    })
}

function render() {
    let studentsCopy = [...students];

    studentsCopy = getSortStudents(column, columnDir)
    
    $studentList.innerHTML = '';
    for (const student of studentsCopy) {

        $studentList.append(newStudentTR(student))
        
    }
}

$studentListData.forEach(elem => {
    elem.addEventListener('click', function() {
        column = this.dataset.column;
        columnDir = !columnDir
        render()
    })
})

document.getElementById('add-student').addEventListener('submit', function(event) {
    event.preventDefault();
    
    students.push(new Student(
        document.getElementById('input-name').value,
        document.getElementById('input-surname').value,
        document.getElementById('input-lastname').value,
        new Date(document.getElementById('input-birthDay').value),
        Number(document.getElementById('yearOfEntry').value),
        document.getElementById('input-faculty').value,

    ))
    render()
})

render();
//for (const student of students) {
   //console.log(student.getBirthDayString(), student.getAge(), student.getlernPeriod(), student.getFIO());
//}


