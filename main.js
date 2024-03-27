#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 10000; // Dollers
let myPin = 361738;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin Code ",
        type: "number"
    }
]);
if (pinAns.pin === myPin) {
    console.log("pin is correct !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option ",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("your required amount is greater then your current amount");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remainig Balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect ");
}
