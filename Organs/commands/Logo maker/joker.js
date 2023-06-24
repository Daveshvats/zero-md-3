const maker = require('mumaker')

module.exports = {
    name: "joker",
    alias: ["joker"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}joker Atlas Bot*`);
        maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}