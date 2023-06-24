const maker = require('mumaker')

module.exports = {
    name: "christmas",
    alias: ["christmastree"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}christmas Atlas Bot*`);
        maker.textpro("https://textpro.me/christmas-tree-text-effect-online-free-1057.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}