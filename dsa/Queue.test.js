const MyQueue = require('./Queue');

beforeEach(() => queue = new MyQueue(5));
afterEach(() => queue = new MyQueue(5));

test("Size is zero by default", () => {
    let actual = queue.size();
    let expected = 0;
    expect(expected).toBe(actual);
});

test("Lenght is 5", () => {
    let actual = queue.length();
    let expected = 5;
    expect(actual).toBe(expected);
});

test("enqueue() increases size by one", () => {
    let actual = queue.size()
    let expected = 0;
    expect(expected).toBe(actual);

    queue.enqueue(8);

    actual = queue.size();
    expected = 1;
    expect(expected).toBe(actual);
});

test("only elements of specifiied lenght(5) can be enqueue()'ed", () => {
    let actual = queue.size()
    let expected = 0;
    expect(expected).toBe(actual);

    for (let index = 0; index < 5; index++) {
        queue.enqueue(8);
    }

    actual = queue.size();
    expected = 5;
    expect(expected).toBe(actual);

    expect(() => queue.enqueue(8)).toThrow("Queue is full!!!");
});


test("dequeue() reduces size by one", () => {
    expect(queue.size()).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);

    queue.dequeue()
    expect(queue.size()).toBe(1)

    queue.dequeue()
    expect(queue.size()).toBe(0)
});


test("dequeue() throws error for empty queue", () => {
    expect(queue.size()).toBe(0);

    expect(() => queue.dequeue()).toThrow("Queue is empty");
});

test("peek returns last element from queue", () => {
    queue.enqueue(2);
    queue.enqueue(4);
    let actual = queue.peek();
    let expected = 2;
    expect(expected).toBe(actual);
});

test("contains() return true if element in queue, else false", () => {
    queue.enqueue(42);
    queue.enqueue(32);
    expect(true).toBe(queue.contains(42));
})

