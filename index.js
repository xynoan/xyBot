const { Client, GatewayIntentBits, channelLink, TextChannel } = require('discord.js');
const jsLang = require('./javascript/8kyu');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ] 
});
require('dotenv/config');

let start = false;
let chosenLanguage = false;
let chosenDifficulty = false;
let javascript = false;
console.log('Program started? ' + start);
console.log('User already chosen a language? ' + chosenLanguage);
console.log('=====================');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  const command = message.content.toLowerCase();
  const language = !chosenLanguage && start && message.content.toLowerCase();
  const diffJS = chosenLanguage && start && javascript && message.content.toLowerCase();

  switch(command) {
    case 'xy!bading':
      message.channel.send("Bawal bading dito!!!!")
      break;
    case 'xy!help':
      message.channel.send("This bot is under development and is expected to ask programmer questions EXCLUSIVELY for EDGT members only, well, for now :)")
      break;
    case 'xy!start':
      start = true
      console.log('Program started? ' + start);
      console.log('User already chosen a language? ' + chosenLanguage);
      console.log('=====================');
      message.channel.send("Choose a programming language [javascript|python|java]")
  };

  switch(language) {
    case 'javascript':
      chosenLanguage = true
      javascript = true
      console.log('Program started? ' + start);
      console.log('User already chosen a language? ' + chosenLanguage);
      console.log('=====================');
      message.channel.send("You have chosen javascript, choose a difficulty (1-8) 1 being the hardest and 8 being the easiest")
      break;
    case 'python':
      chosenLanguage = true
      console.log('Program started? ' + start);
      console.log('User already chosen a language? ' + chosenLanguage);
      console.log('=====================');
      message.channel.send("You have chosen python, choose a difficulty (1-8) 1 being the hardest and 8 being the easiest")
      break;
    case 'java':
      chosenLanguage = true
      console.log('Program started? ' + start);
      console.log('User already chosen a language? ' + chosenLanguage);
      message.channel.send("You have chosen java, choose a difficulty (1-8) 1 being the hardest and 8 being the easiest")
  };

  switch(diffJS) {
    case '8':
      message.channel.send(jsLang[0])
  }

});

client.login(process.env.TOKEN);