// bank.ts
import * as readlineSync from "readline-sync";
type Account = {
  name: string;
  balance: number;
};

let account: Account | null = null;

function createAccount() {
  const name = readlineSync.question("Enter your name to create account: ");
  account = {
    name,
    balance: 0,
  };
  console.log(`✅ Account created for ${name} with ₹${account.balance}`);
}

function deposit() {
  const amount = parseFloat(readlineSync.question("Enter amount to deposit: ₹"));
  if (isNaN(amount) || amount <= 0) {
    console.log("❌ Invalid amount.");
    return;
  }
  account!.balance += amount;
  console.log(`✅ ₹${amount} deposited. New balance: ₹${account!.balance}`);
}

function withdraw() {
  const amount = parseFloat(readlineSync.question("Enter amount to withdraw: ₹"));
  if (isNaN(amount) || amount <= 0) {
    console.log("❌ Invalid amount.");
    return;
  }
  if (amount > account!.balance) {
    console.log("❌ Insufficient funds.");
    return;
  }
  account!.balance -= amount;
  console.log(`✅ ₹${amount} withdrawn. New balance: ₹${account!.balance}`);
}

function checkBalance() {
  console.log(`💰 Current balance: ₹${account!.balance}`);
}

function showMenu() {
  console.log("\n--- 🏦 Bank Menu ---");
  console.log("1. Deposit");
  console.log("2. Withdraw");
  console.log("3. Check Balance");
  console.log("4. Exit");
}

function runBankApp() {
  console.log("🏦 Welcome to TypeScript Bank!");
  createAccount();

  while (true) {
    showMenu();
    const choice = readlineSync.question("Choose an option: ");

    switch (choice) {
      case "1":
        deposit();
        break;
      case "2":
        withdraw();
        break;
      case "3":
        checkBalance();
        break;
      case "4":
        console.log("👋 Exiting. Thank you!");
        process.exit(0);
      default:
        console.log("❌ Invalid choice. Try again.");
    }
  }
}

runBankApp();
