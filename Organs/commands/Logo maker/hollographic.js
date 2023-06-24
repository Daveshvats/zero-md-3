const maker = require('mumaker')

module.exports = {
    name: "hollographic",
    alias: ["holographic"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}holographic Atlas Bot*`);
        maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}