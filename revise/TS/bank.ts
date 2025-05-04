import * as readlineSync from 'readline-sync'

type Account = {
    name: String, 
    balance: Number,
}

let account: Account| null = null;

class Bank{
    createAccount(): void{
        const name : String = readlineSync.question('Enter the name: ')
        const balance: number = parseInt(readlineSync.question("Enter the balance: "))
        account = {
            name,
            balance
        }  
    }

    deposit(amount: Number): void{
        account!.balance +=  amount
        console.log("Current balance:   "+ account!.balance)
    }
}

const obj = new Bank()
obj.createAccount()
obj.deposit(1000)