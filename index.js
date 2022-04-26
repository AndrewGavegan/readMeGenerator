// adding node modules 
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// prompt function for the questions that you will be asked //
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

//  function that populates it with the answers to your prompt //
function generateREADME( data ) {
console.log( data );
// text inside template literals not tabbed and not stacked together so that it will format properlly in github as a .md file
return `
# README for ${data.title}

---
## Description

${data.description}

---
## Table of contents
* ${data.contents.filter(element => {
if (!element){
return false;
}
else return true
}).join("\n* ")
}
---

## Installation

${data.installation}

---
## Usage 

${data.useage}

---
## Credits 

${data.credits}

---
## License

${data.license} 

---
## Badges

${data.license.filter(element => {
if (element == "Apache 2.0") {
data.license.push("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
}
if (element == "GNU GPL v3") {
data.license.push("[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
}
if (element == "BSD 3-Clause License") {
data.license.push("[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)");
}
if (element == "MIT") {
data.license.push("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
}
if (element == "Unlicensed") {
data.license.push("[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)");
}
})
}
${data.license[1]}

---
## Contributing 

${data.contributing} ${data.email}

---
## Test

${data.tests}

---

## Questions

Please also direct questions to: ${data.questions} and ${data.email}
`;
}

//  generating new file and naming it what you answered in the prompt question //
     async function init() {
         console.log("Hello and Welcome to the README Generator")
         try {

            const data = await promptUser();

            const md = generateREADME( data );

            const filename = data.title.toLowerCase().split(' ').join(' ') + ".md";

            console.log(filename);

            await writeFileAsync(filename, md);

            console.log("Successfully created README.md");
        } catch (err) {
            console.log(err);
        }
     }
// calling init function //
     init();