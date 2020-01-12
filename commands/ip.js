exports.run = (client, message, args) => {
	message.channel.send({embed: {
		color: 0x906582,
		author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
		},
		title: ':: IP del server ::',
		url: 'https://spk.katsunet.com',
		description: 'Versiones soportadas: Desde 1.8 a 1.15.1',
		fields: [
			{
				name: 'IP',
				value: 'spk.katsunet.com'
			},
			{
				name: 'IP Númerica',
				value: '149.56.106.172:51100'
			}
		],
		timestamp: new Date(),
		footer: {
		  icon_url: client.user.avatarURL,
		  text: '¡Galletas para todos!'
		}
	  }
	});
};