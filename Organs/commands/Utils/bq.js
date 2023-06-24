const axios = require('axios')
const fs = require('fs')
module.exports = {
    name: "bq",
    alias: ["quote"],
    desc: "Gives you an Ai generated quote image.",
    usage:`${prefa}bq`,
    category: "Ai",
    react:"✅",
    start: async(client, m,{ text, quoted, args }) => {
const username = "ʐɛʀօ"
const avatar = "https://telegra.ph/file/59952c903fdfb10b752b3.jpg"

const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#FFFFFF",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": username,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
       client.sendMessage(
            m.from,
            { image: buffer },
            {
              quoted: m,
            }
          );})

}}