const {filterScore, increaseScoreBy, getSquares, sendBookToAll, findNoonClasses, totalOf, filterHealthyItems} = require("./task");

beforeEach(() => studentScores = [10, 30, 50, 70, 90, 80, 100, 11]);

afterEach(() => studentScores = [10, 30, 50, 70, 90, 80, 100, 11]);

test("filter scores greater than 70",() => {
    let result = filterScore(studentScores, 70);
    let answer = [70, 90, 80, 100];
    expect(result).toEqual(answer);
});

test("increase scores by 5",() => {
    let result = increaseScoreBy(studentScores, 5);
    let answer = [15, 35, 55, 75, 95, 85, 105, 16];
    expect(result).toEqual(answer);
});

test("get squares of number",() => {
    let result = getSquares(studentScores);
    let answer = [100, 900, 2500, 4900, 8100, 6400, 10000, 121];
    expect(result).toEqual(answer);
});

test("Send book to all members",() => {
    let result = sendBookToAll(["Leke", "Divi", "Esth", "Uzor"], "How to kill a Mockingbird");
    let answer = {"Divi": "How to kill a Mockingbird", "Esth": "How to kill a Mockingbird", "Leke": "How to kill a Mockingbird", "Uzor": "How to kill a Mockingbird"};
    expect(result).toEqual(answer);
});

test("test fetch all noon classes", () => {
    let result = findNoonClasses(["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]);
    let answer = ["1:00 PM", "3:00 PM", "5:00 PM"];
    expect(result).toEqual(answer);
});

test("test fetch total of groceries", () => {
    let data = {
        'groceires': 150,
        'dining out': 100,
        'transportation': 50,
        'entertainment': 80
    };
    let result = totalOf(data);
    let answer = 380;
    expect(result).toBe(answer);
});

test("filter healthy items from shopping list", () => {
    let shoppingList = [
        {name: "Apple", isHealthy: true},
        {name: "Coke", isHealthy: false},
        {name: "Omblee", ishealthy: false},
        {name: "Orange", isHealthy: true}
    ];

    let result = filterHealthyItems(shoppingList);
    let answer = [
        {name: "Apple", isHealthy: true},
        {name: "Orange", isHealthy: true}
    ];

    expect(result).toEqual(answer);
});

