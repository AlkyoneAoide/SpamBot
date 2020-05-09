
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, randAlphabet } = require("./config.json");
const actions = require('./actions.js')


//Find + Execute Command
runCommand = function(args, message) {
	const msgHelper = { args, message, Discord, randAlphabet }
	const cmd = args[0]

	if (cmd in actions) {
		console.log(message.content)
		actions[cmd](msgHelper)
	}
	else {
		const response = `FOOL\nYou cannot run ${cmd}`
		console.log(response)
		return message.channel.send(response)
	}
}


msgResponder = function(message) {
	//Check if message starts with the prefix (default '\')
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	//Take everything after the prefix and split it into an array
	//For example, \help roll will become [help,roll]
	let args = message.content.slice(prefix.length).split(/ +/);

	runCommand(args, message);
}


//===========================================================
// Once the entire document is loaded, run the main function
//===========================================================

//The main function, start the bot here
function main() {
	client.once('ready', () => {
		console.log('Ready!');
	});

	//What happens every time a message is picked up by the bot
	client.on('message', msgResponder)

	client.login(token);
}

main()
