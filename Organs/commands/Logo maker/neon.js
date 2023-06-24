const maker = require('mumaker')

module.exports = {
    name: "neon",
    alias: ["neonstyle"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}neon Atlas Bot*`);
        maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}