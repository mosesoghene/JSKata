let filterScore = (studentScores, threshold) => studentScores.filter((studentScore) => studentScore >= threshold);
let increaseScoreBy = (studentScores, number) => studentScores.map((studentScore) => studentScore + number);
let getSquares = (studentScores) => studentScores.map((studentScore) => studentScore * studentScore);

let sendBookToAll = (members, book) => {
    let sentMembers = {};
    for (const member of members) {
        sentMembers[member] = book;
    }
    return sentMembers;
}

let findNoonClasses = (classesSchedule) => classesSchedule.filter((schedule) => schedule.includes("PM") || schedule.includes("pm"));
let totalOf = (expenses) => {
    let total = 0;
    for (const category in expenses) {
        total += expenses[category];
    }
    return total;
};

let filterHealthyItems = (shoppingList) => shoppingList.filter((item) => item.isHealthy);


module.exports = {filterScore, increaseScoreBy, getSquares, sendBookToAll, findNoonClasses, totalOf, filterHealthyItems};