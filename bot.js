//Mimic a webpage with jsdom
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

//Extra (needed) variables
const Discord = require('discord.js');
const client = new Discord.Client();
const json = require("./token.json");
const botToken = json["token"];


//The main function, start the bot here
function main() {
	client.once('ready', () => {
	console.log('Ready!');
	});

	client.login(botToken);
}


//Put all bot code here
client.on('message', message => {
	console.log(message.content);
});


//====================================================
// Once the document is loaded, run the main function
//====================================================
document.addEventListener("DOMContentLoaded", main());