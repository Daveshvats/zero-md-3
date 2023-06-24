const maker = require('mumaker')

module.exports = {
    name: "matrix",
    alias: ["mtx"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}matrix Atlas Bot*`);
        maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}