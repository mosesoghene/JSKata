class Node{
    data;
    next;

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    #head;
    #size;

    constructor() {
        this.#head = null;
        this.#size = 0;
    }

    size() {
        return this.#size;
    }

    add(data) {
        let newNode = new Node(data);
        if (this.#head == null) {
            this.#head = newNode;
            this.#size++;
            return;
        }

        let current = this.#head;
        while (current.next != null) current = current.next;
        current.next = newNode;
        this.#size++;
    }

    get(index) {
        this.#validateBounds(index);
        let currentNode = this.#head;
        for (let i = 0; i < index; i++) currentNode = currentNode.next;
        return currentNode.data;
    }

    #validateBounds(index) {
        if (index < 0 || index >= this.#size) {
            throw new Error("Index out of bound");
        }
    }

    prepend(data) {
        let newNode = new Node(data);
        if (this.#head == null) {
            add(data);
            return;
        }
        newNode.next = this.#head;
        this.#head = newNode;
        this.#size++;
    }

    insert(data, index) {
        this.#validateBounds(index);

        if (index == 0) {
            this.prepend(data);
            return;
        }

        if (index == this.#size) {
            this.add(data);
            return;
        }


        let newNode = new Node(data);
        let previousNode = this.#head;
        for (let i = 0; i < index - 1; i++) previousNode = previousNode.next;

        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.#size++;
    }

    remove(index) {
        this.#validateBounds(index);

        if (index == 0) {
            this.removeFirst();
            return;
        }

        if (index == this.#size -1) {
            this.removeLast();
            return;
        }


        let previousNode = this.#head;
        for (let i = 0; i < index - 1; i++) previousNode = previousNode.next;

        previousNode.next = previousNode.next.next;
        this.#size--;
    }

    removeFirst() {
        if (this.#head == null) throw new Error("Cannot remove from an empty list.");

        let data = this.#head.data;
        this.#head = this.#head.next;
        this.#size--;
        return data;
    }

    removeLast() {
        if (this.#size <= 1) return this.removeFirst();

        let current = this.#head;
        while (current.next.next != null) current = current.next;
        let data = current.next.data;
        current.next = null;
        this.#size--;

        return data;
    }

    clear() {
        this.#head = null;
        this.#size = 0;
    }


    contains(element) {
        let currentNode = this.#head;
        while (currentNode != null) {
            if (currentNode.data === element) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

    indexOf(element) {
        if (this.#size == 0) throw new Error("Cannot find an element in an empty list.");
        let currentNode = this.#head;
        let index = 0;
        while (currentNode != null) {
            if (currentNode.data === element) return index;
            currentNode = currentNode.next;
            index++;
        }
    }

}

module.exports = SinglyLinkedList;
