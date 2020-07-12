const Discord = require('discord.js');
const ayarlar = require('../config.json');

module.exports.run = async function(client, msg, args) {
    let pingembed =  new Discord.RichEmbed()
        .setColor(ayarlar.color)
        .setDescription(`Pinging...`)
    const message = msg
    const m = await msg.channel.send(pingembed);
    let embed = new Discord.RichEmbed()
        .setColor(ayarlar.color)
        .setDescription(`🏓 API latency time is \`${Math.round(client.ping)}ms\``)//yarrak biliyon
    m.edit({ embed });
}
exports.conf = {
  enabled: true,
  aliases: [],
};

exports.help = {
  name: "ping",
  description: "",
  usage: ""
};
