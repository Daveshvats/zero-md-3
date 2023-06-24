module.exports = {
    name: "stablediff",
    alias: ["stable"],
    desc: "Gives you an Ai generated image.",
    usage:`${prefa}stablediff`,
    category: "Ai",
    react:"✅",
    start: async(client, m,{ text, quoted, args }) => {
        let urlll = [
            "Rs-Zeltoria","8899506c989114d3c58c9f36"
          ];
          let rae = urlll[Math.floor(Math.random() * urlll.length)];
        
        let wife = `https://api.itsrose.site/image/stable/diffusion?prompt=${text}&apikey=${rae}`;
        client.sendMessage(
          m.from,
          { image: { url: wife } },
          {
            quoted: m,
          }
        );
      },
    };