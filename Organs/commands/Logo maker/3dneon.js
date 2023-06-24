const maker = require('mumaker')

module.exports = {
    name: "3dneon",
    alias: ["3dn"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}3dneon Atlas Bot*`);
        maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}