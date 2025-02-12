const increaseArrayNumber = require("./addition");

test("Test increase number array", () => {
    let expected = increaseArrayNumber([3,4,2]);
    let result = [3,4,3];
    expect(expected).toEqual(result);
    expected = increaseArrayNumber([9,9,9]);
    result = [1,0,0,0];
    expect(expected).toEqual(result);
});