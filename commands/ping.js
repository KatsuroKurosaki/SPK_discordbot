exports.run = (client, message, args) => {
	//message.reply('Pong!');
	message.channel.send("Pong!").catch(console.error);
};