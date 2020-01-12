// Imports
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

var conf = require('./conf.json');

client.on('error', (e) => {
	console.error(e)
});

client.on('warn', (e) => {
	console.warn(e)
});

/*client.on('debug', (e) => {
	console.info(e)
});*/

fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		console.log("Detectado evento: " + file);
		let eventFunction = require('./events/' + file);
		let eventName = file.split('.')[0];
		// La magia de la programación: Llamar eventos con sus argumentos, y con la variable client incluida.
		client.on(eventName, (...args) => eventFunction.run(client, ...args));
	});
});

client.login(conf.token);