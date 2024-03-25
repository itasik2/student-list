export default class Student {
    
    constructor(name, surename, lastname, birthDay, yearOfEntry, faculty) {
        this.name = name
        this.surename = surename
        this.lastname = lastname
        this.birthDay = birthDay
        this.yearOfEntry = yearOfEntry
        this.faculty = faculty
    }

    get fio() {
        return this.lastname + ' ' + this.name + ' ' + this.surename  
    }

    

    getBirthDayString() {
        const yyyy = this.birthDay.getFullYear();
        let mm = this.birthDay.getMonth() + 1;
        let dd = this.birthDay.getDate();
        if(dd < 10) dd = '0' + dd;
        if(mm < 10) mm = '0' + mm;
        return dd + '.' + mm + '.' + yyyy;
    }

    getlernPeriod() {
        return `${this.yearOfEntry} - ${new Date().getFullYear()} (${this.getCourses()})`; 
    }

    getCourses() {
       
        let lerningStart = new Date(this.yearOfEntry, 8, 1); // Предполагаем, что поступление было 1 сентября указанного года
        let courses = new Date().getFullYear() - lerningStart.getFullYear();
        
        if (new Date().getMonth() < 8 || (new Date().getMonth() === 8 && new Date().getDate() < 1)) {
            courses--; // Если текущая дата меньше 1 сентября, то студент еще не начал новый учебный год
        }
        
        if (courses > 4) {
            return 'Окончил';
        } else {
            return courses + ' курс';
        }
    }

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthDay.getFullYear();
        let m = today.getMonth() - this.birthDay.getMonth();
        if(m < 0 || (m === 0 && today.getDate() < this.birthDay.getDate())) {
            age--;
        };
        return age; 
    }
}