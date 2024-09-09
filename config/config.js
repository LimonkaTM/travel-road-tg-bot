const paths = require('./paths');

require('@dotenvx/dotenvx').config({path: paths.env})

const bot_config = {
  name: process.env.BOT_NAME,
  token: process.env.BOT_TOKEN
};

const db_config = {
  name: process.env.DB_NAME
};

module.exports = {bot_config, db_config};