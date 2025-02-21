const Rectangle = require('./Shapes');

test('test rectangle to get name', () => {
    const rectangle = new Rectangle('rectangle', 8, 5);
    const expected = rectangle.getName();
    const actual = 'rectangle';
    expect(expected).toBe(actual);
});

test('test to get rectangle area', () => {
    const rectangle = new Rectangle('rectangle', 8, 5);
    const expected = rectangle.getArea();
    const actual = 40;
    expect(expected).toBe(actual);
});


test('test that shape is square', () => {
    const rectangle = new Rectangle('rectangle', 5, 5);
    const expected = rectangle.isSquare();
    const actual = true;
    expect(expected).toBe(actual);
});


test('test that shape is not square', () => {
    const rectangle = new Rectangle('rectangle', 8, 5);
    const expected = rectangle.isSquare();
    const actual = false;
    expect(expected).toBe(actual);
});