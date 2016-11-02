//import inquirer from 'inquirer';
const inquirer = require('inquirer'); 
inquirer
	.prompt(['输入内容'])
	.then((answers) => {console.log(answers[0]);});