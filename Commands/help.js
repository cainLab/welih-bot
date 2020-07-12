const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async (client, message, args, tools) => {

  const embed = new Discord.RichEmbed()
    .setTitle(`Bread`)
    .setDescription(`This is a list of commands you can use.`)
    .setThumbnail(bot.user.avatarURL)
    .addField(
      `All Commands`,
      `\`set\`, \`ping\`, \`help\`, \`register\``
    )
    .setColor(config.color);
  message.channel.send(embed);
};
exports.conf = {
    enabled: true,
    aliases: [],
  };
  
  exports.help = {
    name: "help",
    description: "",
    usage: ""
  };
  