import dotenv from "dotenv";
import { Bot, InlineKeyboard } from "grammy";

dotenv.config();

const { BOT_TOKEN } = process.env;
const bot = new Bot(BOT_TOKEN!);
bot.command(
  "start",
  async (ctx) => await ctx.reply("Welcome! Up and running.")
);
// Handle other messages.

bot.command(
  "about",
  async (ctx) =>
    await ctx.reply("Обо мне", {
      reply_markup: new InlineKeyboard().webApp(
        "grammY website",
        "https://it-tinder-jointime1s-projects.vercel.app/"
      ),
    })
);

bot.start();
