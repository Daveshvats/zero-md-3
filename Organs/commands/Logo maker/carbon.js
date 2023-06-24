const maker = require('mumaker')

module.exports = {
    name: "carbon",
    alias: ["carboneffect","carbonstyle"],
    desc: "Make text logo",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}carbon Atlas Bot*`);
        maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}