class stack<T>{
    private items: T[] = []
    append(num: T): void{
        this.items.push(num)
    }
    pop(): T | undefined{
        return this.items.pop()
    }
}

const obj = new stack<Number>()
obj.append(100)
console.log(obj.pop()) 