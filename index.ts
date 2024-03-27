#! usr/bin/env node

import inquirer from "inquirer";



const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
{
    name: "userguessnumbeer",
    type: "number",
    message: "Please guess a number between 1-6: ",


},
]);

if(answers.userguessnumbeer===randomNumber) {
    console.log("congratulations! you picked a write number, ");
}else {
    console.log("Sorry you picked a wrong number. ")
}