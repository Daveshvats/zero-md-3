const axios = require("axios");
const fs = require("fs");
require("../../../settings");
module.exports = {
  name: "wallsearch",
  alias: ["wall"],
  usage: `${prefa}wallsearch`,
  desc: "Gives you random cosplay image",
  react: "✅",

  category: "Weeb",
  start: async (client, m, { command, prefix, text, args }) => {
    let apirnobg = ['2da1fcd209f20ae428d8482f','8e66d0934cf741bfd2182c16','BrunoSobrino','85faf717d0545d14074659ad']
	let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
    let wife = `https://api.lolhuman.xyz/api/wallpaper?apikey=${apinobg}&query=${text}`;
    client.sendMessage(
      m.from,
      { image: { url: wife } },
      {
        quoted: m,
      }
    );
  },
};
