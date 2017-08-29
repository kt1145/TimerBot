const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "#!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'mine') {
setTimeout(function () {
  msg.channel.sendMessage('Pong!');
}, 300000);

  }
});

client.login('MzUxNDc0MTM4OTgxODU5MzM4.DIXv_w.Lr67fK7fqaf20Ycy9DTbWF6rpyQ');
