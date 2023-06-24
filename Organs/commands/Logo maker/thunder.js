const maker = require('mumaker')

module.exports = {
    name: "thunder",
    alias: ["thd"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}thunder Atlas Bot*`);
        maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}