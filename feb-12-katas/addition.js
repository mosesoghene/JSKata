let increaseArrayNumber = (array) => {
    let strArray = array.toString().replaceAll(",", "");
    let arrayToNumber = Number.parseInt(strArray) + 1;
    let numberToString = arrayToNumber.toString(10).split('');
    let result = numberToString.map((char) => Number.parseInt(char));
    return result;
}

module.exports = increaseArrayNumber;