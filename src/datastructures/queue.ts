class Queue<T> {
  private collection: Array<T>;

  constructor() {
    this.collection = [];
  }

  public enqueue(item: T): void {
    this.collection.push(item);
  }

  public dequeue(): T {
    this.collection.unshift();
    return this.collection[this.collection.length - 1];
  }

  public front(): T {
    return this.collection[0];
  }

  public size(): number {
    return this.collection.length;
  }

  public empty(): boolean {
    return this.collection.length === 0;
  }
}

class PriorityQueue<T> {
  private elements: T[];
  private compare: (a: T, b: T) => number;

  constructor(compare: (a: T, b: T) => number) {
    this.elements = [];
    this.compare = compare;
  }

  enqueue(element: T): void {
    this.elements.push(element);
    this.elements.sort(this.compare);
  }

  dequeue(): T | undefined {
    return this.elements.shift();
  }

  peek(): T | undefined {
    return this.elements[0];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }
}

// Example usage:

// Priority function: higher numbers have higher priority
const priorityFunction = (a: number, b: number) => b - a;

const priorityQueue = new PriorityQueue<number>(priorityFunction);

priorityQueue.enqueue(3);
priorityQueue.enqueue(1);
priorityQueue.enqueue(5);

console.log(priorityQueue.dequeue()); // Output: 5
console.log(priorityQueue.dequeue()); // Output: 3
console.log(priorityQueue.dequeue()); // Output: 1

export default function queueExample() {
  const queue = new Queue<number>();

  console.log(`Is Queue Empty - ${queue.empty()}`);

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  console.log(`Front of Queue - ${queue.front()}`);

  queue.dequeue();

  console.log(`Size the queue - ${queue.size()}`);

  const priorityQueue = new PriorityQueue<number>(priorityFunction);

  priorityQueue.enqueue(3);
  priorityQueue.enqueue(1);
  priorityQueue.enqueue(5);

  console.log(priorityQueue.dequeue()); // Output: 5
  console.log(priorityQueue.dequeue()); // Output: 3
  console.log(priorityQueue.dequeue()); // Output: 1
}
