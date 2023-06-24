const maker = require('mumaker')

module.exports = {
    name: "bokeh",
    alias: ["bokehstyle","bokeheffect"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(client, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}bokeh Atlas Bot*`);
        maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${text}`,]).then((data) => client.sendMessage(m.from, { image: { url: data }, caption: `Made by ʐɛʀօ` }, { quoted: m }))
    .catch((err) => m.reply(`${err}`));
    }
}