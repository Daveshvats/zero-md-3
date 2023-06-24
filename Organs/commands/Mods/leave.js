module.exports = {
  name: "leave",
  alias: ["bye", "left"],
  usage: `${global.prefa}leave`,
  desc: "Leave the group",
  category: "Mods",
  react: "👋",

  start: async (
    client,
    m,
    { command, prefix, iscreator, participants, pushName }
  ) => {
    if (!iscreator) return m.reply("*👑 Only mod can use this command*");
    let json = [
      "https://i.ibb.co/gJgGQGf/Sci-Fi-Geometric-Dark-Gaming-Logo.png",
        "https://i.ibb.co/QjMYkmN/Monochrome-Modern-Technology-Black-Logo.png",
        "https://i.ibb.co/Y7hfV5V/Black-and-Blue-Modern-Geometric-Simple-Portfolio-Photographer-Presentation.png",
        "https://i.ibb.co/wwZ2QKc/Yellow-Black-White-Darkness-Paper-Framed-Album-Cover.png",
        "https://i.ibb.co/WVXgPrB/Black-Simple-Clothing-Brand-Logo-1.png"
    ];
    let rae = json[Math.floor(Math.random() * json.length)];
    await client.sendMessage(m.from, {
      image: {
        url: rae,
      },
      caption: `Bot is being removed by *${pushName}* 😞`,
      mentions: participants.map((a) => a.id),
    });
    client.groupLeave(m.from).catch((e) => {
      client.sendMessage(m.from, { text: `An error Occurd !` }, { quoted: m });
    });
  },
};
