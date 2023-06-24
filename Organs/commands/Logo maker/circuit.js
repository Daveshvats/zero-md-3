const maker = require('mumaker')

module.exports = {
    name: "circuit",
    alias: ["cir"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}circuit Atlas Bot*`);
        maker.textpro("https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}