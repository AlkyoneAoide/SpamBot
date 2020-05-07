//Mimic a webpage with jsdom
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

//Extra (needed) variables
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require("./config.json");
const dict = require("./dict.json");


//The main function, start the bot here
function main() {
	client.once('ready', () => {
	console.log('Ready!');
	});

	client.login(token);
}


//What happens every time a message is picked up by the bot
client.on('message', message => {
	//Check if message starts with the prefix (default '\')
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	//Take everything after the prefix and split it into an array
	//For example, \help roll will become [help,roll]
	let args = message.content.slice(prefix.length).split(/ +/);

	runCommand(args);

	//Find + Execute Command
	function runCommand(str) {
		return message.channel.send(`You wanted to run ${args}`);
		console.log(dict[`${args}`]);
		if(dict[`${args}`]) {eval(dict[`${args}`])}
		else {return message.channel.send('Invalid Command')}
	}

});


//===========================================================
// Once the entire document is loaded, run the main function
//===========================================================
document.addEventListener("DOMContentLoaded", main());
