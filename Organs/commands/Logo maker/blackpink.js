const maker = require('mumaker')

module.exports = {
    name: "blackpink",
    alias: ["bp"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}blackpink Atlas Bot*`);
        maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}