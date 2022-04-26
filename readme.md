
# README for readme
---
## Description
    My application is used to generate a README file in markdown format, using Node JS and the inquirer, fs and util packages. It prompts the user for input, places the user input into a template and then writes the data to a new .md file.
---
## Table of contents
* Title
* Description
* Installation
* Useage
* License
* Contributing
* Tests
* Questions
---

## Installation
    To install this application, the user runs the “index.js” file in Node. Running the index file will prompt the user for a series of questions relating to the creation of a README file. Using a template literal, the user input is then assigned to elements and then written to a new file, which is named based on the name of the application for which the README is being written. The README file is created in the same directory as the index file and when opened in the browser, will show as a polished marked README document.
---
## Usage 
    The application requires three Node packages in the first instance: inquirer, fs and util. Those packages are used together to prompt the user for information and  create an asynchronous function with a promise (init), within which the “generateREAME” function is called, which assigns the user input to the relevant parts of the markdown template literal. Badges are assigned based on the license chosen by the user (calling on the badge sources in shields.io). The fs package is used to write the file (also asynchronously, and promisified in order to do so) and the filename is modified to reflect the name of the application. 
---
## Credits 
    This was a solo project, however the project relied heavily on Node JS and the packages mentioned above
---
## License
    MIT
---
## Badges 
    
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
---

## Contributing 
    Should others wish to contribute to this application, I thank them for their interest and request that they use the standards from at the Contributor Covenant.
    Note: the [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard
---

## Test
    No tests were taken for this project.
---

## Questions
    Please direct questions to: AndrewGavegan, https://github.com/AndrewGavegan/ and zzandrewzz@optusnet.com.au
