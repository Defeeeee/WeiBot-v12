const BaseEvent = require('../../utils/structures/BaseEvent');
const Discord = require('discord.js')

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;

    const mentionedmember = message.mentions.members.first();
    if (mentionedmember) {
      if (mentionedmember.id === '369170765129580546'){
      const noEmbed = new Discord.MessageEmbed()
        .setTitle('Penpiko please stop')
        .setDescription("Do not ping Penpiko or any other gov member if it's not necessary")
        .setColor('RED')
        .setFooter("Weibot, developed by console.log('Defee')#7700")
        message.channel.send(noEmbed)
      }
    }
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}