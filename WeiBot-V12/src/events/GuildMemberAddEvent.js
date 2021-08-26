// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const rulesChannel = member.guild.channels.cache.get('424279803928117259');
    rulesChannel.send(`<@${member.user.id}> Has joined THE WEI!`)
  }
}