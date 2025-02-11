const {getEmployeeName, companyDetails} = require("./techCorp");
 
beforeEach(() => company = {
    name: "TechChorp",
    location: "San Francisco",
    employees: [
        {id: 1, name: "Moses", department: "HR"},
        {id: 1, name: "Oghene", department: "Engineering"},
        {id: 1, name: "Esther", department: "Marketing"},
        {id: 1, name: "Ifeanyi", department: "Engineering"},
    ]
});

test("Name of second employee test", () => {
    expect()
})