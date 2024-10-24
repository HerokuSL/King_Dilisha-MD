// MEDIAFIRE DOWNLOAD COMMAND

const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app' // API LINK ( DO NOT CHANGE THIS!! )


cmd({
    pattern: "gdrive",
    alias: ["googledrive"],
    desc: "download gdrive files",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("Please give me gdrive url");
  if(!q.includes('gdrive.com')) return await reply("This url is invalid");
  
const mfire = await fetchJson(`${apilink}/download/gdrive?url=${q}`);
  
const msg = `
           🔥 *GOOGLE DRIVE DOWNLOADER* 🔥


• *File Name* - ${gdrive.result.fileName}

• *File Size* - ${gdrive.result.size}

• *Upload Date and Time* - ${gdrive.result.date}

`

// SEND DETAILS
await conn.sendMessage( from, { image: { url: 'https://telegra.ph/file/cad7038fe82e47f79c609.jpg' }, caption: msg }, { quoted: mek });

// SEND FILE
await conn.sendMessage(from, { document: { url: gdrive.result.dl_link }, mimetype: gdrive.result.fileType , fileName: gdrive.result.fileName, caption: gdrive.result.fileName }, { quoted: mek });

  
} catch (e) {
console.log(e)
reply('This url type is not working !!')
}
})

// https://whatsapp.com/channel/0029VaaPfFK7Noa8nI8zGg27
