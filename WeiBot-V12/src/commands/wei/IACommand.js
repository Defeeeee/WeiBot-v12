const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class IACommand extends BaseCommand {
  constructor() {
    super('IA', 'wei', []);
  }

  run(client, message, args) {
    let Excellencies = message.guild.roles.cache.find(role => role.name === "Excellencies");
    let IA = message.guild.roles.cache.find(role => role.name === "Internal Affairs");
    const mentionedMember = message.mentions.members.first()
    if (!message.member.roles.cache.has(Excellencies.id)) return message.channel.send(`You don't have enough permissions to use this command`)
    if (!mentionedMember) return message.channel.send(`You have to tag the username you want to give Internal Affairs`)

    await mentionedMember.roles.add(IA.id).catch(err => message.channel.send("I can't give IA to this member"))
    message.channel.send(`I've succesfully added ${mentionedMember.user} to Internal Affairs`)
  }
}