//var conf = require('../conf.json');

exports.run = (client, message, args) => {
	if (message.author.bot) return;

	// Aún no se procesan mensajes privados
	if (message.channel.type === "dm") {
		message.reply("Lo siento, aún no tengo inteligencia artificial para chatear contigo.");
		return;
	}

	// Ignorar mensaje si no empieza con mi trigger
	if (!message.content.startsWith(conf.cmdtrigger)) return;

	var args = message.content.slice(conf.cmdtrigger.length).trim().split(/ +/g);
	var cmd = args.shift().toLowerCase();

	try {
		let commandFile = require('../commands/' + cmd + '.js');
		commandFile.run(client, message, args);
	} catch (err) {
		console.error(err);
	}

};