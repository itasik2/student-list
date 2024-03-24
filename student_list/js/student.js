export default class Student {
    
    constructor(name, surename, lastname, birthDay, yearOfEntry, faculty) {
        this.name = name
        this.surename = surename
        this.lastname = lastname
        this.birthDay = birthDay
        this.yearOfEntry = yearOfEntry
        this.faculty = faculty
    }

    getFIO() {
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
        const currentDate = new Date().getFullYear() - this.yearOfEntry;

        return currentDate;
    }

    getCours() {
        
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