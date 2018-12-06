const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "2";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "512945089799258142"; // ايدي السررفر
var channel = "514101063280885760";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**hh , Dream , Dhkham , Dream , Dream , aymen , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },100000000000000000000000000000000000000000000000000000000000000000000000000000000);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);"NTIwMzM5ODE2NTM0MjQ1Mzc4.Dusdmg.ZfpCtRBPWlNwpBMZsG07xupQe0I"
