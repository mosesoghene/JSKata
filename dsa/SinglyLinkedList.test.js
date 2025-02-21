const SinglyLinkedList = require("./SinglyLinkedList");

beforeEach(() =>
        list = new SinglyLinkedList()
);

afterEach(() =>
    list = new SinglyLinkedList()
);

test("sizeIsZeroByDefault_SinglyLinkedListTest", () => {
    expect(0).toBe(list.size());
});

test("addX_sizeIncreasesByOne_SinglyLinkedListTest", () => {
    expect(0).toBe(list.size());
    list.add(1);
    expect(1).toBe(list.size());
});

test("addXY_sizeIncreasesByTwo_SinglyLinkedListTest", () => {
    expect(0).toBe(list.size());
    list.add(1);
    list.add(2);
    expect(2).toBe(list.size());
});

test("addX_getIndexZero_returnX_SinglyLinkedListTest", () => {
    list.add(1);
    expect(1).toBe(list.get(0));
});

test("addXYZ_getIndexOne_returnY_SinglyLinkedListTest", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(2).toBe(list.get(1));
});

test("addXY_getIndexZero_returnX_prependZ_getIndexZero_returnZ_SinglyLinkedListTest", () => {
    list.add(1);
    list.add(2);
    expect(1).toBe(list.get(0));

    list.prepend(3);
    expect(3).toBe(list.get(0));
});

test("addXYZ_getIndexOne_returnY_insertAInIndexOne_getIndexOne_returnA_SinglyLinkedListTest", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(2).toBe(list.get(1));

    list.insert(4, 0);
    expect(4).toBe(list.get(0));


    list.insert(5, 2);
    expect(5).toBe(list.get(2));
});

test("addXYZ_getIndexThree_throwsException_insertAInIndexThree_throwsException_SinglyLinkedListTest", () => {
    list.add(1);
    list.add(2);
    list.add(3);

    expect(() => list.insert(4, 3)).toThrow("Index out of bound");

    expect(() => list.get(3)).toThrow("Index out of bound");
});

test("addXYZ_removeFirstReturnsX_sizeDecreasesByOne_SinglyLinkedListTest", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(3).toBe(list.size());

    expect(1).toBe(list.removeFirst());
    expect(2).toBe(list.size());

    expect(2).toBe(list.removeFirst());
    expect(1).toBe(list.size());
});

test("removeFirstOnEmptyListThrowsException_SinglyLinkedListTest", () => {
    expect(0).toBe(list.size());
    expect(() => list.removeFirst()).toThrow("Cannot remove from an empty list.");
});

test("addXYZ_removeLastReturnsZ_sizeDecreasesByOne_SinglyLinkedListTest", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(3).toBe(list.size());

    expect(3).toBe(list.removeLast());
    expect(2).toBe(list.size());

    expect(2).toBe(list.removeLast());
    expect(1).toBe(list.size());
});

test("removeLastOnEmptyListThrowsException_SinglyLinkedListTest", () => {
    expect(0).toBe(list.size());
    expect(() => list.removeLast()).toThrow("Cannot remove from an empty list.");
});

test("addXYZ_clearRemovesAllElements_sizeSetToZero_SinglyLinkedListTest", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    list.clear();
    expect(0).toBe(list.size());
});

test("addXYZ_listContainsY_returnsTrue_listContainsA_returnsFalse_SinglyLinkedListTest", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(true).toBe(list.contains(2));
    expect(false).toBe(list.contains(4));
});

test("addXYZ_indexOfY_returnsOne_SinglyLinkedListTest", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(1).toBe(list.indexOf(2));
    expect(0).toBe(list.indexOf(1));
});

test("indexOf_ThrowsErrorOnEmptyList_SinglyLinkedListTest", () => {
    expect(0).toBe(list.size());
    expect(() => list.indexOf(1)).toThrow("Cannot find an element in an empty list.");
});

test("addXYZ_removeIndexOne_getIndexOneReturnsZ_SinglyLinkedListTest", () => {
    list.add(1);
    list.add(2);
    list.add(3);

    expect(3).toBe(list.size());

    list.remove(1);
    expect(3).toBe(list.get(1));

    expect(2).toBe(list.size());
});
