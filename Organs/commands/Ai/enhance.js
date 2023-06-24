const {Jimp} = require("jimp")
const { axios } = require("axios");
let { TelegraPh } = require("../../../lib/uploader");
const processing = require("@xct007/photo-enhance");
const fs = require("fs");
module.exports = {
    name: "enhance",
    alias: ["enhance"],
    desc: "Gives you an Ai edited image.",
    usage:`${prefa}enhance`,
    category: "Ai",
    react:"✅",
    start: async(client, m,{ text, quoted, command,prefix,args }) => {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ""
    if (!/image/g.test(mime)) m.reply(`Reply/Send Image With Command${prefix + command}!`)
    await m.reply("wait")
    let data = await client.downloadAndSaveMediaMessage(quoted)
    let image = await TelegraPh(data)
    try{
		let urlPath =`${image}`
		let methods = "enhance";
       processing(urlPath, methods).then((buffer) => {
		const bufer = Buffer.from(buffer , 'base64')
        client.sendMessage(
            m.from,
            { image: bufer },
            {
              quoted: m,
            }
          );})}
catch (e) {m.reply(e)

}}}