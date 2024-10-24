const {cmd , commands} = require('../command')
const fg =  require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me a url or tittle")
const search = await yts(q)
const data = search.videos[0];
const url  = data.url

let desc = ` 
  
    ╭════ 🅼🆄🆂🅸🅲 ════─❃
┃▢╭─────────────┈
┃▢│ tittle: ${data.tittle}
┃▢│ despcription: ${data.description} 
┃▢│ time: ${data.time}
┃▢| ago: ${data.ago}     
┃▢│ views: ${data.views}
┃▢│ like: ${data.like}
┃▢╰─────────────┈
╰══════════════════─❃

 `


await conn.sendMessage(from,{image:{url: data. thumbnail},caption:desc},{quoted:mek});

/////////////----------------

let down = await fg.yta(url)
let downloadUrl = down.dl_url
    
//----------------------------- 
    
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"𝑨𝑼𝑫𝑰𝑶 🎵"},{quoted:mek})

    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

