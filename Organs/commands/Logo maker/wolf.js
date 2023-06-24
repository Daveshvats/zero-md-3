const maker = require('mumaker')

module.exports = {
    name: "wolf",
    alias: ["wolfstyle","wolflogo"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text.includes("|")) return m.reply(`Example: *${prefix}wolf Atlas Bot | Team Atlas*`);
        teks1 = text.split("|")[0]
        teks2 = text.split("|")[1]
        maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
            `${teks1}`,`${teks2}`]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}