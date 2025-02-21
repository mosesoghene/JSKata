class MyQueue {
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

    
    enqueue(element){
        if (this.#size < this.#lenght) {
            this.#elements[this.#size++] = element;
            return;
        }
        throw new Error("Queue is full!!!");        
    }

    dequeue(){
        if (this.isEmpty()) throw new Error("Queue is empty");
        
        let element = this.#elements[0];
        let remainingElements = [];

        for (let i = 1; i < this.#size; i++) 
            remainingElements[i] = this.#elements[i];

        this.#elements = remainingElements;
        this.#size--;

        return element;
    }

    isEmpty(){
        return this.#size === 0;
    }

    peek(){
        if (this.isEmpty()) throw new Error("Queue is empty");        
        return this.#elements[0];
    }

    contains(element) {
        for (let item of this.#elements) if (item === element) return true;
        return false;
    }
}

module.exports = MyQueue;