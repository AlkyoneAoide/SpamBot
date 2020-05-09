function help() {
	return message.channel.send('Help')
}

function avatar() {
	let embed = new Discord.MessageEmbed();
	if (args[1])
		{return message.channel.send(
			embed
			.setTitle(message.mentions.users.first().username)
			.setImage(
				message.mentions.users.first().avatarURL( {format: 'png'} )
			)
		)}
	else
		{return message.channel.send(
			embed
			.setTitle(message.author.username)
			.setImage(message.author
				.avatarURL( {format: 'png'} )
			)
		)}
}

function rand() {
	let char;
	let msg = new Array(randAlphabet.length);
	if (args[1])
		{char = args[1]}
	else
		{char = 10}

	for(i=0; i<char; i++)
		{msg[i] = randAlphabet[Math.floor(Math.random() * (randAlphabet.length - 1) + 1)]}

	return message.channel.send(msg.join(''))
}
