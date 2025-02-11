let getStudentName = (student) => student.name;
let getCourse = (student, number) => student.courses[number -1];
let getGPA = (student) => student.GPA;
let getZipCode = (student) => student.address.zip;
let getAge = (student) => student.age;

let updateAge = (student, newAge) => {
    student.age = newAge;
    return student;
};

let getDetails = (student) => {
    let details = `${getStudentName(student)} is ${getAge(student)} years old and has a GPA of ${getGPA(student)}`;

    return details;
};

module.exports = {getStudentName, getCourse, getZipCode, updateAge, getAge, getDetails}