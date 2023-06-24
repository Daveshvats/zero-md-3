require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "repo",
    alias: ["Zero"],
    usage: `${prefa}repo`,
    desc: "Will send you details of our bot",
    react: "✅",
    
    category: "General",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let yup = ["https://i.ibb.co/gJgGQGf/Sci-Fi-Geometric-Dark-Gaming-Logo.png",
"https://i.ibb.co/QjMYkmN/Monochrome-Modern-Technology-Black-Logo.png",
"https://i.ibb.co/Y7hfV5V/Black-and-Blue-Modern-Geometric-Simple-Portfolio-Photographer-Presentation.png",
"https://i.ibb.co/wwZ2QKc/Yellow-Black-White-Darkness-Paper-Framed-Album-Cover.png",
"https://i.ibb.co/WVXgPrB/Black-Simple-Clothing-Brand-Logo-1.png"
          ]
let Zero = await axios.get('https://api.github.com/repos/Daveshvats/zero-md-3/')
let rae = yup[Math.floor(Math.random() * yup.length)]

var rr = `✨ _*█▓▒­░⡷⠂ZΞЯФ⠐⢾░▒▓█*_  ✨\n\n🍀 *Description:* ${Zero.data.description}\n\n 📎 *Repo Link:* ${Zero.data.html_url} \n\n 🌠 *Total Star:* ${Zero.data.stargazers_count}\n\n 💕 *Total Forks:* ${Zero.data.forks} \n\n 💁🏻‍♂️ *Tutorial:* https://www.youtube.com/watch?v=KqgyScOlvV8 \n`
await client.sendMessage(m.from,{image:{url:rae}, caption:rr},{quoted:m})
    }}