
module.exports = (_ => { return {


help: msgHelper => {
	const { message } = msgHelper
	return msgHelper.message.channel.send('Valid Commands\nhelp\ninvite\navatar\nrand')
},


invite: msgHelper => {
	const { message } = msgHelper
	return msgHelper.message.channel.send('https://discord.com/oauth2/authorize?client_id=707383577586696294&scope=bot&permissions=8')
},


avatar: msgHelper => {
	const { args, message, Discord } = msgHelper
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
},


rand: msgHelper => {
	const { args, message, randAlphabet } = msgHelper
	let char;
	let msg = new Array(randAlphabet.length);
	if (!args[1])
		{char = 10}
	else if (args[1] > 2000 || isNaN(args[1]))
		{return message.channel.send('Pick a number 2000 or below!')}
	else
		{char = args[1]}

	for(i=0; i<char; i++)
		{msg[i] = randAlphabet[Math.floor(Math.random() * (randAlphabet.length - 1) + 1)]}

	return message.channel.send(msg.join(''))
}


}})()
