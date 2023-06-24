const maker = require('mumaker')

module.exports = {
    name: "demon",
    alias: ["evil"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}demon Atlas Bot*`);
        maker.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}
