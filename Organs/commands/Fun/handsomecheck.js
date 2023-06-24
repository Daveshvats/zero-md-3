module.exports = {
  name: "handsomecheck",
  alias: ["handsomechek"],
  desc: "check",
  cool: 3,
  react: "😆",
  category: "Fun",
  start: async (
    client,
    m,
    { text, prefix, args, mentionedJid, mentionByTag }
  ) => {
    if (!text)
      return client.sendMessage(
        m.from,
        { text: `Please tag a user to use this command!` },
        { quoted: m }
      );
    const mentionedUser = mentionByTag[0];

    function shibam(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const dey = shibam(1, 100)
    let Mikutext = `Handsome Check Of : @${
      mentionedUser.split("@")[0]
    }\n\nAnswer : *${dey}%*😍💕`;

    client.sendMessage(
      m.from,
      {
        image: { url: "https://i.ibb.co/QjMYkmN/Monochrome-Modern-Technology-Black-Logo.png" },
        caption: Mikutext,
        mentions: [mentionedUser],
      },
      { quoted: m }
    );
  },
};
