const {Jimp} = require("jimp")
const { axios } = require("axios");
let { TelegraPh } = require("../../../lib/uploader");
module.exports = {
    name: "toanime",
    alias: ["toan"],
    desc: "Gives you an Ai edited image.",
    usage:`${prefa}toanime`,
    category: "Ai",
    react:"✅",
    start: async(client, m,{ text, quoted, command,prefix,args }) => {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ""
    if (!/image/g.test(mime)) m.reply(`Reply/Send Image With Command${prefix + command}!`)
    await m.reply("wait")
    let data = await client.downloadAndSaveMediaMessage(quoted)
    let image = await TelegraPh(data)
    let anime
    try{
        let wife = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`
        client.sendMessage(
            m.from,
            { image: { url: wife } },
            {
              quoted: m,
            }
          );}
catch (e) {m.reply(e)

}}}
function ToAnime(efek, img) {
    try {
    if (efek == "caliph") {
        return "https://api.caliph.biz.id/api/animeai?img=" + img + "&apikey=caliphkey"
        }
    } catch (e) {
        throw eror
    }
}

async function Crop(img, x, y, lebar, tinggi) {
  let po = await Jimp.read(img);
  let tong = await po.crop(Number(x), Number(y), Number(lebar), Number(tinggi)).getBufferAsync(Jimp.MIME_JPEG)
  return tong
}
