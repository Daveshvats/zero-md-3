const maker = require('mumaker')

module.exports = {
    name: "3dstone",
    alias: ["3ds"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}3dstone Atlas Bot*`);
        maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}