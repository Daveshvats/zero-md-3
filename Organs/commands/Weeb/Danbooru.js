const danbooru = require('@xct007/frieren-scraper');
module.exports = {
    name: "danbooru",
    alias: ["danbooru"],
    usage: `${prefa}danbooru`,
    desc: "Gives you random danbooru image",
    react: "😜",
    
    category: "Weeb",
    start: async (client, m, {
        command,
        prefix,
        text
        
    }) => {
        fetch(danbooru.search(`${text}`))
        .then(response => response.json())
  .then(result => {
        client.sendMessage(m.from, {image:{url:result.url}}, {
            quoted: m
        })
  
    })}}