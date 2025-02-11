const {bankAccount} = require("./bank.js");

test("Deposit Amount", () => {
    expect(bankAccount.getBalance()).toBe(500);
});