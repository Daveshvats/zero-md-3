const axios = require("axios");

module.exports = {
  name: "truth",
  alias: ["t"],
  desc: "truth",
  cool: 3,
  react: "🙄",
  category: "Fun",
  start: async (client, m, { text, prefix }) => {
    const shibam = await axios.get(
      "https://dull-plum-panda-gear.cyclic.app/truth"
    );

    await client.sendMessage(m.from, {image: { url: "https://i.ibb.co/QjMYkmN/Monochrome-Modern-Technology-Black-Logo.png" },caption: `*${shibam.data}*`,}, { quoted: m });
  },
};
