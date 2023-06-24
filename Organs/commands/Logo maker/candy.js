const maker = require('mumaker')

module.exports = {
    name: "candy",
    alias: ["candy"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}candy Atlas Bot*`);
        maker.textpro("https://textpro.me/create-christmas-candy-cane-text-effect-1056.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}