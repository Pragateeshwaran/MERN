// stack.ts

class Stack<T> {
    private items: T[] = [];
  
    // Push an item onto the stack
    push(item: T): void {
      this.items.push(item);
    }
  
    // Pop an item from the stack
    pop(): T | undefined {
      return this.items.pop();
    }
  
    // Peek at the top item without removing
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size(): number {
      return this.items.length;
    }
  
    // Print stack for debugging
    print(): void {
      console.log(this.items);
    }
  }
  
  // Usage Examples:
  const numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  numberStack.print(); // [10, 20]
  console.log("Popped:", numberStack.pop()); // 20
  
  const stringStack = new Stack<string>();
  stringStack.push("hello");
  stringStack.push("world");
  stringStack.print(); // ["hello", "world"]
  
  const mixedStack = new Stack<any>();
  mixedStack.push(1);
  mixedStack.push("string");
  mixedStack.push({ key: "value" });
  mixedStack.print(); // [1, "string", { key: "value" }]
  