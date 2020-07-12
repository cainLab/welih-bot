const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
const { promisify } = require("util");
require("./Util/eventLoader")(client);


const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./Commands/", (err, files) => {
  if (err) console.error(err);
  log(`Total commands: ${files.length} .`);
  files.forEach(f => {
    let props = require(`./Commands/${f}`);
    log(`Loaded Command: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});



client.on("guildMemberAdd", async member => {
  let role = await db.fetch(`autorole_${member.guild.id}`);
  let channel = await db.fetch(`autorolechannel_${member.guild.id}`);
  let msj = await db.fetch(`messsagee_${member.guild.id}`);
  if (!role) return;
  if (!channel) return;

  member.addRole(role);
  if (!msj) {
    let embed = `<@${member.user.id}>, the role is given automatically.`;

    client.channels.get(channel).send(embed);
    return;
  } else {
    var msj2 = msj
      .replace(`{guild}`, `${member.guild.name}`)
      .replace(`{user}`, `<@${member.user.id}>`)
      .replace(`{user-tag}`, `${member.user.tag}`)
      .replace(`{role}`, `${member.guild.roles.get(rol).name}`);
    const embed = new Discord.RichEmbed()
      .setColor(config.color)
      .setDescription(msj2);

    client.channels.get(channel).send(embed);
    return;
  }

});
client.login(config.token);
