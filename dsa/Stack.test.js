const MyStack = require('./Stack');

beforeEach(() => stack = new MyStack(5));
afterEach(() => stack = new MyStack(5));

test("Size is zero by default", () => {
    let actual = stack.size();
    let expected = 0;
    expect(expected).toBe(actual);
});

test("Lenght is 5", () => {
    let actual = stack.length();
    let expected = 5;
    expect(actual).toBe(expected);
});

test("push() increases size by one", () => {
    let actual = stack.size()
    let expected = 0;
    expect(expected).toBe(actual);

    stack.push(8);

    actual = stack.size();
    expected = 1;
    expect(expected).toBe(actual);
});

test("only elements of specifiied lenght(5) can be push()'ed", () => {
    let actual = stack.size()
    let expected = 0;
    expect(expected).toBe(actual);

    for (let index = 0; index < 5; index++) {
        stack.push(8);
    }

    actual = stack.size();
    expected = 5;
    expect(expected).toBe(actual);

    expect(() => stack.push(8)).toThrow("Stack is full!!!");
});

test("pop() reduces size by one", () => {
    expect(stack.size()).toBe(0);

    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);

    stack.pop()
    expect(stack.size()).toBe(1)

    stack.pop()
    expect(stack.size()).toBe(0)
});


test("pop() throws error for empty stack", () => {
    expect(stack.size()).toBe(0);

    expect(() => stack.pop()).toThrow("Stack is empty");
});

test("peek returns last element from stack", () => {
    stack.push(2);
    stack.push(4);
    let actual = stack.peek();
    let expected = 4;
    expect(expected).toBe(actual);
});

test("contains() return true if element in stack, else false", () => {
    stack.push(42);
    stack.push(32);
    expect(true).toBe(stack.contains(32));
})

