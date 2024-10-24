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
