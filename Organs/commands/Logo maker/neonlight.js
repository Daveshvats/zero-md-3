const maker = require('mumaker')

module.exports = {
    name: "neonlight",
    alias: ["neonlighteffect"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}neonlight Atlas Bot*`);
        maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}