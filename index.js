// adding node modules 
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFileAsync);

// function for questions that you will be asked //
 function promptUser() {
     return inquirer.prompt([
        {
            type: "input",
            name: "author",
            message: "What is the Authors name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "title",
            message: "Please enter the title of your application"
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description of your application"
        },
        {
            type: "checkbox",
            message: "Please choose the elements you would like to include in your table of contents?",
            name: "contents",
            choices: [
                "Title",
                "Description",
                "Installation",
                "Useage",
                "License",
                "Contributing",
                "Tests",
                "Questions"

            ]
        },

        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running",

        },

        {
            type: "input",
            name: "useage",
            message: "Provide instructions and examples for use. Include screenshots as needed"
        },

        {
            type: "input",
            name: "credits",
            message: "List your collaborators, if any, with links to their GitHub profiles"

        },

        {
            type: "checkbox",
            message: "Please choose the type of license for your app",
            name: "license",
            choices: [
                "Apache 2.0",
                "GNU GPL v3",
                "BSD 3-Clause License",
                "MIT",
                "Unlicense",

            ]
        },

        {
            type: "input",
            name: "package",
            message: "Please input package name"
        },

        {
            type: "input",
            name: "contributing",
            message: "If you would like other developers to contribute it, please add guidelines for how to do so"
        },

        {
            type: "input",
            name: "tests",
            message: "Please provide links to any tests"
        },

        {
            type: "input",
            name: "questions",
            message: "Please provide your Github username and link to your Github profile"
        },
     ]);
 }