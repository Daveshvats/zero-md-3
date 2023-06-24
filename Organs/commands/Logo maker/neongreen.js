const maker = require('mumaker')

module.exports = {
    name: "neongreen",
    alias: ["gereenneon","gerenneon","ngreen"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}ngreen Atlas Bot*`);
        maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}