
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        message:  "Enter your GitHub username:",
        name:   "userName",
        default:  "jidlebir",
    },
    {
        type: "input" ,
        message:  "Enter your email:",
        name:   "userEmail",
        default:  "malcolm.idlebird@gmail.com",
    },
    {
        type: "input" ,
        message: "Enter the name of the GitHub Repo:" ,
        name:   "repoName",
        default:  "README_Generator",
    },
    {
        type: "input",
        message:  "Enter the title of your Project:"  ,
        name:  "projectTitle" ,
        default: "Project_1" ,
    },
    {
        type: "input" ,
        message:  "Enter a discription for your project:",
        name:   "projectDescription",
        default: "Project_1_description" ,
    },
    {
        type: "input" ,
        message:  "Enter install instructions:",
        name:   "installNotes",
        
    },
    {
        type: "input",
        message:  "Enter usage instructions:"  ,
        name:  "usageNotes" ,
        
    },
    {
        type: "input",
        message:  "Enter information for contributors:"  ,
        name:  "contribNotes" ,
        
    },
    {
        type: "input",
        message:  "Enter information about testing:"  ,
        name:  "testing" ,
        
    },
    {
        type: "list",
        message:  "Choose licence Type:"  ,
        choices: ["MIT","The Unlicense","No License"],
        name:  "licenseSelection" ,
        
    }

];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log(`The file has been saved as: ${fileName}`);
    });
}


function init() {
    console.log(`Professional README Generator | Created by Malcolm Idlebird ©2021
    Follow the prompts to create your readme.md file`);

    inquirer
        .prompt(questions)
        .then(answers => {
            //group all input data into a variable
            const collectedData = generateMarkdown(answers);

            //file name to be created 
            outputFileName = answers.projectTitle + ".md";

            //send data as inputs to writefile fuction 
            writeToFile(outputFileName , collectedData);

        });
}


init();
