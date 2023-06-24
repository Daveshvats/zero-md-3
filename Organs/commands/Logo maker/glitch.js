const maker = require('mumaker')

module.exports = {
    name: "glitch",
    alias: ["glt"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}glitch Atlas Bot*`);
        maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}