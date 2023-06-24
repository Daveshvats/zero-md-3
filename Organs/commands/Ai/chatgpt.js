const axios = require('axios')
require ('../../../settings')
module.exports = {
    name: "chatgpt",
    alias: ["g"],
    desc: "Gives you the info of the given query.",
    usage:`${prefa}chatgpt [question]`,
    category: "Education",
    react:"🧪",
    start: async(client, m,{ text, quoted, args }) => {
        try {
if (!text) return m.reply ('*Please provide a query*')          
let tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino&text=${text}&user=zero`)
let hasill22 = await tioress22.json()
client.sendMessage(m.from, { text: `${hasill22.result}`.trim() }, { quoted: m });
} catch (efe4) {    
console.log(efe4)}}}