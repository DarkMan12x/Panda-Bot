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
    .setThumbnail(`https://images-ext-1.discordapp.net/external/IbPnF_c3u4LD-3uu0T7SJdHSDdR7pDyimrI9kmD0nIw/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/860481024731774976/7cf79c0af1e076c14681c8368dcf9c4f.png`)
    .setTitle(`**Apple Help**`)
    .setDescription(`
*** <a:emoji_23:852559927339253851>  | Prefix bot ***
***__>__***
<a:emoji_19:946815040542089277>   **User Commands**
\`invite\` - \`support\` - \`about\`
\`ping\` - \`prefix\` - \`uptime\`
\`tinvites\` - \`sug\` - \`roleuser\`
\`report\` - \`se\` - \`invites\`

<a:emoji_17:954306775568486420> **Music Commands**
\`play\` - \`skip\` - \`skipto\`
\`stop\` - \`volume\` - \`nowplaying\`
\`shuffle\` - \`search\` - \`resume\`
\`remove\` - \`queue\` - \`loop\`
\`lyrics\` - \`radio\`

<a:Info:954307508309209118>  **Moderation Commands**
\`ban\` - \`unban\` - \`setnick\`
\`roleadd\` - \`roleremove\` - \`vkick\`
\`setprefix\` - \`clear\` - \`close\`
\`open\` - \`senddm\`
\`giveaway SetTime(d,h,m) #setChannel\`

<a:emoji_22:946815073815498783> **Gif Commands**
\`boy\` - \`girl\` - \`couple\`
\`sad\` - \`cartoon\` - \`anime\`
\`neon\`

<a:emoji_20:856127714804105216> **Game Commands**
\`kiss\` - \`slap\` - \`hug\`

<a:emoji_15:944601443254554654> **Economy Commands**
\`Comming Soon\`

<a:dslink:954306419270778930> **Links**
[Support](https://discord.gg/cfSzCXNVxx)
[Invite](https://discord.com/api/oauth2/authorize?client_id=860481024731774976&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
