var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
const Discord = require('discord.js');
const client = new Discord.Client();
const json = require("./token.json");
const botToken = json["token"];

function main() {
	client.once('ready', () => {
	console.log('Ready!');
	});

	client.login(botToken);
}

client.on('message', message => {
	console.log(message.content);
});

document.addEventListener("DOMContentLoaded", main());