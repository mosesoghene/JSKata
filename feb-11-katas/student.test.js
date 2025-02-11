const {getStudentName, getCourse, getZipCode, updateAge, getAge, getDetails} = require("./students.js");


beforeEach(() => student = {
    name: "John Doe",
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001,
    },
    GPA: 3.8,
});

afterEach(() => student = {
    name: "John Doe",
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001,
    },
    GPA: 3.8,
});

test("get student name test", () => {
    expect(getStudentName(student)).toBe("John Doe");
});

test("get second student course test", () => {
    expect(getCourse(student, 2)).toBe("Physics");
});

test("get student zip test", () => {
    expect(getZipCode(student)).toBe(10001);
});

test("Get age, update age, age is udpdated, get details", () => {
    expect(getAge(student)).toBe(22);
    student = updateAge(student, 23);
    expect(getAge(student)).toBe(23);
    expect(getDetails(student)).toBe("John Doe is 23 years old and has a GPA of 3.8");
});