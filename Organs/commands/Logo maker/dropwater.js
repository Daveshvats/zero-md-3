const maker = require('mumaker')

module.exports = {
    name: "dropwater",
    alias: ["dw"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}dropwater Atlas Bot*`);
        maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
            `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}