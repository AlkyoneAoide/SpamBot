const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
});

client.login('NzA3MzgzNTc3NTg2Njk2Mjk0.XrIAdw._M2R8DRc6tEExaZiPCryAjv2iGo');

client.user.setStatus('invisible');