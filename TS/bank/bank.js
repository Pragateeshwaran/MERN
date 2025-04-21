"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// bank.ts
var readlineSync = require("readline-sync");
var account = null;
function createAccount() {
    var name = readlineSync.question("Enter your name to create account: ");
    account = {
        name: name,
        balance: 0,
    };
    console.log("\u2705 Account created for ".concat(name, " with \u20B9").concat(account.balance));
}
function deposit() {
    var amount = parseFloat(readlineSync.question("Enter amount to deposit: ₹"));
    if (isNaN(amount) || amount <= 0) {
        console.log("❌ Invalid amount.");
        return;
    }
    account.balance += amount;
    console.log("\u2705 \u20B9".concat(amount, " deposited. New balance: \u20B9").concat(account.balance));
}
function withdraw() {
    var amount = parseFloat(readlineSync.question("Enter amount to withdraw: ₹"));
    if (isNaN(amount) || amount <= 0) {
        console.log("❌ Invalid amount.");
        return;
    }
    if (amount > account.balance) {
        console.log("❌ Insufficient funds.");
        return;
    }
    account.balance -= amount;
    console.log("\u2705 \u20B9".concat(amount, " withdrawn. New balance: \u20B9").concat(account.balance));
}
function checkBalance() {
    console.log("\uD83D\uDCB0 Current balance: \u20B9".concat(account.balance));
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
        var choice = readlineSync.question("Choose an option: ");
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
