const axios = require("axios");

module.exports = {
  name: "dare",
  alias: ["givedare", "d"],
  desc: "give a dare",
  cool: 3,
  react: "🙄",
  category: "Fun",
  start: async (client, m, { text, prefix }) => {
    const shibam = await axios.get(
      "https://dull-plum-panda-gear.cyclic.app/dare"
    );
    
    await client.sendMessage(m.from, {image: { url: "https://i.ibb.co/QjMYkmN/Monochrome-Modern-Technology-Black-Logo.png" },caption: `*${shibam.data}*`,}, { quoted: m });
  },
};
