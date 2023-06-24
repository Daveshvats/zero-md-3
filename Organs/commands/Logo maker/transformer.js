const maker = require('mumaker')

module.exports = {
    name: "transformar",
    alias: ["transformer"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}transformer Atlas Bot*`);
        maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}