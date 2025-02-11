let bankAccount = {
    owner: "Alice",
    balance: 500,
    deposit: function(amount) {
        this.balance += amount;
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    },
    getBalance: function() {
        return this.balance;
    }
}

module.exports = {bankAccount};
