
const {bankAccount} = require("./bank.js");


test("Get balance returns 500", () => {
    expect(bankAccount.getBalance()).toBe(500);
});

test("deposite 200, Get balance returns 700", () => {
    expect(bankAccount.getBalance()).toBe(500);
    bankAccount.deposit(200);
    expect(bankAccount.getBalance()).toBe(700);
});

test("deposit 200, withdraw 1000, Get balance returns 700", () => {
    expect(bankAccount.getBalance()).toBe(700);
    bankAccount.withdraw(1000)
    expect(bankAccount.getBalance()).toBe(700);
});