const Discord = require("discord.js");
const db = require("quick.db");
const config = require('../config.json');

module.exports.run = async function(client, message, args) {

  let boyrol = await db.fetch(`boy_${member.guild.id}`);
  let girlrol = await db.fetch(`girl_${member.guild.id}`);
  let role = await db.fetch(`registerrole_${member.guild.id}`);
  let name = args[1];
  let age = args[2];
  
  if(!args[0]){
    return  message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Please select role.`)
        .addField("Boy", `${config.prefix}register boy {name} {age}`, true)
        .addField("Girl", `${config.prefix}register girl {name} {age}`, true)
        .setColor("RED")
    );
  }
  if(!role){
      return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Please set boy role,girl role and main role .`)
        .setColor("RED")
    );
  }
  
  if(args[0]==="boy"){
    if(!boyrol){
      return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Please set boy role,girl role and main role .`)
        .setColor("RED")
    );
  }
    if(!name){
      return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Please write ur name.`)
        .setColor("RED")
    );}
    if(!age){
      return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Please write ur age.`)
        .setColor("RED")
    );
  }

    message.author.addRole(boyrol);
    message.author.setName(`${name} | ${age}`);
    message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`You have been verified.`)
        .setColor(config.color)
    );
  }
  if(args[0]==="girl"){
    if(!girlrol){
      return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Please set boy role,girl role and main role .`)
        .setColor("RED")
    );
  }
    if(!name){return message.channel.send("Adını yaz")}
    if(!age){return message.channel.send("Yasını yaz")}

    message.author.addRole(girlrol);
    message.author.setName(`${name} | ${age}`);
    message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`You have been verified.`)
        .setColor(config.color)
    );
  }

  message.author.addRole(role);
};

exports.conf = {
  enabled: true,
  aliases: ["kayıt", "kayit"],
};

exports.help = {
  name: "register",
  description: "",
  usage: ""
};
