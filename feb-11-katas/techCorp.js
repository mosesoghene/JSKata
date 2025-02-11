let getEmployeeName = (company, employeeID) => {
    return company.employees.filter((employee) => employee.id == employeeID).name;
}

let companyDetails = (company) => {
    let {name, location} = company;
    return `Company: ${name} \nLocation: ${location}`
}

let printEmployees = (company) => {
    company.employees.array.forEach(employee => {
        console.log(`Employee: ${employee.name} \nDepartment: ${employee.department}`)
    });
}