const ttt = require("google-tts-api");

module.exports = {
  name: "sayspanish",
  alias: ["speakspanish", "sayspanish", "sayinjapnese", "sayja"],
  desc: "Say somethong using bot in spanish accent.",
  usage: "sayspanish <text>",
  react: "🍁",
  category: "General",
  start: async (client, m, { pushName, prefix, args, text, mime }) => {
    if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ""}`;
    } else if (args[0]) {
      message = args.join(" ");
    } else {
      message = `Please provide me a text to say ${pushName} senpai !`;
    }

    const texttospeechurl = ttt.getAudioUrl(message, {
      lang: "es",
      slow: false,
      host: "https://translate.google.com",
    });

    client.sendMessage(
      m.from,
      { audio: { url: texttospeechurl }, mimetype: "audio/mpeg" },
      { quoted: m }
    ).catch((e) => {
      m.reply(`An error Occurd !`);
    });
  },
};
