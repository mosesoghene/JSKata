class MyStack {
    #lenght;
    #size;
    #elements;

    constructor(length){
        this.#elements = [];
        this.#lenght = length;
        this.#size = 0;
    }

    length(){
        return this.#lenght;
    }

    size(){
        return this.#size;
    }

    push(element){
        if (this.#size < this.#lenght) {
            this.#elements[this.#size++] = element;
            return;
        }
        throw new Error("Stack is full!!!");        
    }

    pop(){
        if (this.isEmpty()) throw new Error("Stack is empty");
        
        let element = this.#elements[this.#size - 1];
        let remainingElements = [];

        for (let i = 0; i < this.#size - 2; i++) 
            remainingElements[i] = this.#elements[i];

        this.#elements = remainingElements;
        this.#size--;

        return element;
    }

    isEmpty(){
        return this.#size === 0;
    }

    peek(){
        if (this.isEmpty()) throw new Error("Stack is empty");        
        return this.#elements[this.#size -1];
    }

    contains(element) {
        for (let item of this.#elements) if (item === element) return true;
        return false;
    }
}

module.exports = MyStack;