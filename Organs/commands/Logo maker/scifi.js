const maker = require('mumaker')

module.exports = {
    name: "scifi",
    alias: ["scifieffect"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}scifi Atlas Bot*`);
        maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
            `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}