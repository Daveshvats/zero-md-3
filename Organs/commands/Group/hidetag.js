
module.exports = {
	name: "hidetag",
	alias: ["hid"],
	desc: "Send you an hidden ping message.",
	category: "Group",
    react:"✅",
    start:async(client,m,{text, prefix, isAdmin, participants, args })=>{
        if (!isAdmin)
      return m.reply(mess.useradmin);

      var message = "*『 Attention Here 』*";

    if(m.quoted){
        message = "*『 Attention Here 』*";
      }
    else if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ''}`;
    }
    else if(args[0]){
      message = args.join(' ');
    }
    else if(text ===''){
      message = "*『 Attention Here 』*";
    }
   
    else{
      message = "*『 Attention Here 』*";
    }
    await client.sendMessage(
      m.from,
      { text: message, mentions: participants.map((a) => a.id) },
      { quoted: m }
    );
  },
};
