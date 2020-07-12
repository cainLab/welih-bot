const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports = async client => {
  console.log(
    `${client.user.tag}, ` +
      client.channels.size +
      ` adet kanala, ` +
      client.guilds.size +
      ` adet sunucuya ve ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` kullanıcıya hizmet veriyor.`
  );

  client.user.setStatus("online");
  client.user.setActivity("at www.zyro.cf");
};
