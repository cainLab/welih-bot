const Discord = require("discord.js");
const db = require("quick.db");
const config = require('../config.json');
  
  module.exports.run = async function (client, message, args) {
   
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      const embed = new Discord.RichEmbed()
        .setDescription("You don't have permmisions")
        .setColor("RED")
  
      message.channel.send(embed);
      return;
    }

    if(!args[0]){
        message.channel.send(
        new Discord.RichEmbed()
        .setColor(config.color)
        .setDescription("Please set log channel and autorole")
        .addField("Autorole", `${config.prefix}set autorole @role`, true)
        .addField("Log channel", `${config.prefix}set logchannel #channel`, true)
        .addField("Register Role", `${config.prefix}set register-role`, true)
        .addField("Boy Role", `${config.prefix}set boyrole`, true)
        .addField("Girl Role", `${config.prefix}set girlrole`, true)
        .addField("Reset", `${config.prefix}set reset`, true)

        )
      }
    if(args[0]==="autorole"){

        let role = message.mentions.roles.first();
        if (!role) {
            return message.channel.send(
              new Discord.RichEmbed()
                .setDescription("Please specify a role.")
                .setColor("RED")
            );
          }
          db.set(`autorole_${member.guild.id}`, role);
          message.channel.send(
            new Discord.RichEmbed()
              .setDescription(`Autorole set to <#${role}>.`)
              .setColor(config.color)
          );
    }
    if(args[0]==="register-role"){

      let role = message.mentions.roles.first();
      if (!role) {
          return message.channel.send(
            new Discord.RichEmbed()
              .setDescription("Please specify a role.")
              .setColor("RED")
          );
        }
        db.set(`registerrole_${member.guild.id}`, role);
        message.channel.send(
          new Discord.RichEmbed()
            .setDescription(`Register role set to <#${role}>.`)
            .setColor(config.color)
        );
  }
    if(args[0]==="reset"){
          db.delete(`autorole_${member.guild.id}`);
          db.delete(`autorolechannel_${member.guild.id}`);
          db.delete(`registerrole_${member.guild.id}`);
          db.delete(`boy_${member.guild.id}`);
          db.delete(`girl_${member.guild.id}`);
          message.channel.send(
            new Discord.RichEmbed()
              .setDescription(`Reseted autorole, log-channel, boyrole, girlrole and register-role.`)
              .setColor(config.color)
          );
    }
    if(args[0]==="log-channel"){

        let channel = message.mentions.channels.first();
        if (!channel) {
            return message.channel.send(
              new Discord.RichEmbed()
                .setDescription("Please specify a channel.")
                .setColor("RED")
            );
          }
          db.set(`autorolechannel_${member.guild.id}`, channel);
          message.channel.send(
            new Discord.RichEmbed()
              .setDescription(`Log channel set to <#${channel}>.`)
              .setColor(config.color)
          );
    }
    if(args[0]==="boyrole"){

      let role = message.mentions.roles.first();
      if (!role) {
          return message.channel.send(
            new Discord.RichEmbed()
              .setDescription("Please specify a role.")
              .setColor("RED")
          );
        }
        db.set(`boy_${member.guild.id}`, role);
        message.channel.send(
          new Discord.RichEmbed()
            .setDescription(`Boy Role set to <#${role}>.`)
            .setColor(config.color)
        );
    }
    if(args[0]==="girlrole"){

      let role = message.mentions.roles.first();
      if (!role) {
          return message.channel.send(
            new Discord.RichEmbed()
              .setDescription("Please specify a role.")
              .setColor("RED")
          );
        }
        db.set(`girl_${member.guild.id}`, role);
        message.channel.send(
          new Discord.RichEmbed()
            .setDescription(`Girl Role set to <#${role}>.`)
            .setColor(config.color)
        );
  }

};
  exports.conf = {
    enabled: true,
    aliases: ["settings", "config"],
  };
  
  exports.help = {
    name: "set",
    description: "",
    usage: ""
  };
  