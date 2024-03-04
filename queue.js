// Create a class for each node within the queue
class Node {
  // Each node has two properties, its value and a pointer that indicates the node that follows
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// create a class for the queue
class Queue {
  // The queue has three properties, the first node, the last node and the queue size
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // The enqueue method receives a value and adds it to the "end" of the queue
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // The dequeue method eliminates the element at the "beginning" of the queue and return its value
  dequeue() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const queue = new Queue();

queue.enqueue('apple');
queue.enqueue('mango');
queue.enqueue('banana');

console.log(queue.first);
console.log(queue.last);
console.log(queue.size);

console.log(queue.dequeue());
console.log(queue.size);
