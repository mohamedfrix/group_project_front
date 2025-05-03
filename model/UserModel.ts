
export default class User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    wilaya: string;
    expectedGraduationYear: string;
    school: string;
    schoolAbbr: string;

    constructor(id: number, firstName: string = '', lastName: string = '', email: string = '', wilaya: string = '', expectedGraduationYear: string = '', school: string = '', schoolAbbr: string = '') {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.wilaya = wilaya;
        this.expectedGraduationYear = expectedGraduationYear;
        this.school = school;
        this.schoolAbbr = schoolAbbr;
    }
}