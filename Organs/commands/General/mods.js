module.exports = {
  name: "mods",
  alias: ["mod"],
  usage: `${global.prefa}mods`,
  desc: "shows mods list",
  category: "General",
  react: "✅",

  start: async (client, m, {}) => {
    const mod = global.owner;
    const owner = mod.map((mod) => mod + "@s.whatsapp.net");
    let mo = `
       *🎉 Zero Mᴏᴅs 🎉*\n\n`;
    for (let i = 0; i < mod.length; i++) {
      const um = await client.username(mod[i] + "@s.whatsapp.net");
      mo += `\n*👑 Name:* ${um}\n*🎖️ Tag:* @${mod[i].split("@")[0]}\n`;
    }
    let urlll = [
     "https://i.ibb.co/gJgGQGf/Sci-Fi-Geometric-Dark-Gaming-Logo.png",
        "https://i.ibb.co/QjMYkmN/Monochrome-Modern-Technology-Black-Logo.png",
        "https://i.ibb.co/Y7hfV5V/Black-and-Blue-Modern-Geometric-Simple-Portfolio-Photographer-Presentation.png",
        "https://i.ibb.co/wwZ2QKc/Yellow-Black-White-Darkness-Paper-Framed-Album-Cover.png",
        "https://i.ibb.co/WVXgPrB/Black-Simple-Clothing-Brand-Logo-1.png"
    ];
    let rae = urlll[Math.floor(Math.random() * urlll.length)];
    await client.sendMessage(
      m.from,
      { image: { url: rae }, caption: mo, mentions: owner },
      { quoted: m }
    );
  },
};
