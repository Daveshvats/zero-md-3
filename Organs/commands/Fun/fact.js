const axios = require("axios");

module.exports = {
  name: "fact",
  alias: ["givefact"],
  desc: "Give a random fact.",
  react: "🍁",
  category: "Fun",
  start: async (client, m, { pushName, prefix }) => {
    await axios
      .get(`https://nekos.life/api/v2/fact`)
      .then((response) => {
        const tet = `*『  Random Facts  』* \n\n${response.data.fact}`;

        client.sendMessage(
          m.from,
          { image: { url: pic }, caption: tet + "\n" },
          { quoted: m }
        );
      })
      .catch((err) => {
        m.reply(`An error occurred.`);
      });
  },
};
