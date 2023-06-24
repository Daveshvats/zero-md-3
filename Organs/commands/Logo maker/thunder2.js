const maker = require('mumaker')

module.exports = {
    name: "thunder2",
    alias: ["thd2"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}thunder2 Atlas Bot*`);
        maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}