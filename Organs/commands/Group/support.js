module.exports = {
	name: "support",
	alias: ["sup"],
	desc: "Send you official support group link.",
	category: "Group",
    react:"✅",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://media.tenor.com/XikoNQDfaqcAAAPo/bunny-Zero-bunny-ears.mp4',
                   'https://media.tenor.com/xBh07rz9GHYAAAPo/Zero-kamado-Zero.mp4',
                   'https://media.tenor.com/CMHP0DIQY4UAAAPo/demon-slayer-kimetsu-no-yaiba.mp4',
                   'https://media.tenor.com/68c6pxzq3RAAAAPo/Zero-Zero-kamado.mp4',
                   'https://media.tenor.com/JQgNUfM_xcwAAAPo/Zero-kamado-run.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const Zerologogg = "https://i.ibb.co/t3Jd1wK/Zero-6.png"
        
                         
const lemo = `
*━『 Support Group Links 』━*

*1) [ Ɇ𝖙𝖊𝖗𝖓𝖎𝖙ɏ ] :*
https://chat.whatsapp.com/JCCZPbPUbM1536n62zSFZi

*2) [ Ɇ𝖙𝖊𝖗𝖓𝖎𝖙ɏ ₵𝖆𝖘𝖎𝖓ø ] 🎰 :*
https://chat.whatsapp.com/J1WfFPXtmzZGXFB59I0ETq
`
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:Zerologogg},caption:lemo},{quoted:m})  
    }
}