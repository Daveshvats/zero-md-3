module.exports = {
    name: "dalle",
    alias: ["adae"],
    desc: "Gives you an Ai generated image.",
    usage:`${prefa}dalle`,
    category: "Ai",
    react:"✅",
    start: async(client, m,{ text, quoted, args }) => {
        
        let wife = `https://api.lolhuman.xyz/api/dall-e?apikey=SGWN&text=${text}`;
        client.sendMessage(
          m.from,
          { image: { url: wife } },
          {
            quoted: m,
          }
        );
      },
    };