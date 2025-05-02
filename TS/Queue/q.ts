// queue.ts

class Queue<T> {
    private items: T[] = [];
  
    // Add an item to the end
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    // Remove item from the front
    dequeue(): T | undefined {
      return this.items.shift();
    }
  
    // Peek at the front item
    front(): T | undefined {
      return this.items[0];
    }
  
    // Check if queue is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Get the size
    size(): number {
      return this.items.length;
    }
  
    // Print for debugging
    print(): void {
      console.log(this.items);
    }
  }
  
  // ✅ Usage Examples
  
  // Queue of numbers
  const numQueue = new Queue<number>();
  numQueue.enqueue(1);
  numQueue.enqueue(2);
  numQueue.enqueue(3);
  numQueue.print(); // [1, 2, 3]
  console.log("Dequeued:", numQueue.dequeue()); // 1
  
  // Queue of strings
  const strQueue = new Queue<string>();
  strQueue.enqueue("apple");
  strQueue.enqueue("banana");
  strQueue.print(); // ["apple", "banana"]
  console.log("Front:", strQueue.front()); // apple
  
  // Queue of mixed types (using any)
  const mixQueue = new Queue<any>();
  mixQueue.enqueue("hello");
  mixQueue.enqueue(42);
  mixQueue.enqueue({ x: 1 });
  mixQueue.print(); // ["hello", 42, { x: 1 }]  
  