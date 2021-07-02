const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://images-ext-1.discordapp.net/external/ywW90Qq3ButrY58SXGKsfdaHJ5Fl3fAX-jCt66kxq2k/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/807350534901071932/323c09ffbcd4777d8b5d14ac80df56a5.png `)
    .setTitle(`**Panda Help**`)
    .setDescription(`
*** <a:emoji_23:852559927339253851>  | Prefix bot ***
***__>__***
<a:emoji_7:859099940499750912> **User Commands**
\`invite\` - \`support\` - \`about\`
\`ping\` - \`prefix\` - \`uptime\`
\`tinvites\` - \`sug\` - \`roleuser\`
\`report\`

<a:music:852559405718175744> **Music Commands**
\`play\` - \`skip\` - \`skipto\`
\`stop\` - \`volume\` - \`nowplaying\`
\`shuffle\` - \`search\` - \`resume\`
\`remove\` - \`queue\` - \`loop\`
\`lyrics\` - \`radio\`

<a:Work:852558706708054056> **Moderation Commands**
\`ban\` - \`unban\` - \`setnick\`
\`roleadd\` - \`roleremove\` - \`vkick\`
\`setprefix\` - \`clear\` - \`close\`
\`open\` - \`senddm\`

<a:emoji_22:856127603345195019> **Gif Commands**
\`boy\` - \`girl\` - \`couple\`
\`sad\` - \`cartoon\` - \`anime\`
\`neon\`

<a:Twitt3:852558825395453952> **Text Commands**
\`Comming Soon\`

<a:emoji_20:856127714804105216> **Game Commands**
\`kiss\` - \`slap\` - \`hug\`

<a:SIA_money:859103987889864734> **Economy Commands**
\`Comming Soon\`

<a:dslink:859104935194656779> **Links**
[Support](https://discord.gg/cfSzCXNVxx)
[Invite](https://discord.com/api/oauth2/authorize?client_id=860481024731774976&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
