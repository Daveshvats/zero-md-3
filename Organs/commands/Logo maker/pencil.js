const maker = require('mumaker')

module.exports = {
    name: "pencil",
    alias: ["pencilstyle","pencileffect"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}pencil Atlas Bot*`);
        maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}