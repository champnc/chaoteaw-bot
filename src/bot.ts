import {Client, GatewayIntentBits} from "discord.js";
import "dotenv/config";

const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
] });

client.login(process.env.DISCORD_KEY).catch((err) => {
  console.error("login error",err);
  process.exit(1);
});

const prefix = "!";
const randomMessage = ["ว่ายังไง","มีอะไรวะ","ว่าไงจ๊ะ"];

client.on("ready", () => {
  console.log("I'm ready😄...");
});

client.on("messageCreate", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift()?.toLowerCase();

  if (command === "ping") {
    message.reply("ว่ายังไง");
  } else if (command === "ไอฟร้อง") {
    const random = Math.floor(Math.random() * randomMessage.length);
    message.reply(randomMessage[random]);
  }
});
