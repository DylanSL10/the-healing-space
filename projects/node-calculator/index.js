const readline = require('readline-sync');

function getOperation() {
    while (true) {
        const operation = readline.question("What operation would you like to perform? (/, *, -, +): ");
        if (["/", "*", "-", "+"].includes(operation)) {
            return operation;
        }
        console.log("That is not a valid operation. Try again.");
    }
}

function getNumber(prompt) {
    while (true) {
        const input = readline.question(prompt);
        const number = parseFloat(input);
        if (!isNaN(number)) {
            return number;
        }
        console.log("This is not a number. Try again.");
    }
}

function calculate(num1, num2, operation) {
    switch (operation) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    }
}

function main() {
    while (true) {
        const operation = getOperation();
        const num1 = getNumber("Please enter the first number: ");
        const num2 = getNumber("Please enter the second number: ");
        const result = calculate(num1, num2, operation);
        console.log(`The result is: ${result}`);
        
        const again = readline.question("Would you like to perform another calculation? (yes/no): ").toLowerCase();
        if (again !== "yes") break;
    }
    console.log("Goodbye!");
}

main();