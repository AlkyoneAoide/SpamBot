const Discord = require('discord.js');
const client = new Discord.Client();
var json = require("./token.json");
const botToken = json["token"];

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
});

client.login(botToken);