const maker = require('mumaker')

module.exports = {
    name: "blood",
    alias: ["bld"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}blood Atlas Bot*`);
        maker.textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}