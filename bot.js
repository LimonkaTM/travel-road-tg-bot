const Bot = require('node-telegram-bot-api');

const {bot_config} = require('./config/config');

const bot = new Bot(bot_config.token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, bot_config.name);
});