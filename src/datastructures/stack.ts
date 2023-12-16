export class Stack<T> {
  public top: number;
  private capacity: number;
  private storage: Record<number, T>;

  constructor(size: number) {
    this.top = -1;
    this.storage = {};
    this.capacity = size;
  }

  public size(): number {
    return this.top + 1;
  }

  public isEmpty(): boolean {
    return this.top == -1;
  }

  public isFull() {
    return this.top == this.capacity - 1;
  }

  public peek(): T | null {
    return !this.isEmpty() ? this.storage[0] : null;
  }

  public push(item: T): void {
    if (this.isFull()) {
      throw Error("Stack has reached maximum capacity!");
    }

    this.storage[this.top++] = item;
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw Error("Stack cannot be popped as it is empty!");
    }
    this.top--;
    this.capacity--;

    const result = this.storage[this.capacity - 1];

    delete this.storage[this.capacity - 1];

    return result;
  }
}

export default function stackExample() {
  const stack = new Stack(3);

  console.log(`Is Stack Empty - ${stack.isEmpty()}`);

  stack.push(1);
  stack.push(2);
  stack.push(3);

  console.log(`Is Stack Full - ${stack.isFull()}`);

  stack.pop();

  console.log(`Peeking at the top of the stack - ${stack.peek()}`);

  console.log(`Size the stack - ${stack.size()}`);
}
