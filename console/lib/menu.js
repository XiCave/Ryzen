/*
ᴀʟᴠɪɴ'ꜱ ᴏʀɪɢɪɴᴀʟ ʙᴀꜱᴇ

ʙᴀꜱᴇ ʙʏ ᴀʟᴠɪɴ
ᴄʀᴇᴅɪᴛ ᴀʟᴠɪɴ
ʏᴏᴜᴛᴜʙᴇ @ᴄᴀʟʟᴍᴇᴠɪɴᴢ
ɢɪᴛʜᴜʙ : ᴀʟᴠɪɴᴘɪɴ
ɪɴꜱᴛᴀɢʀᴀᴍ : ᴜɴᴋɴᴏᴘɪɴ 
ᴛᴇʟᴇɢʀᴀᴍ : ᴛ.ᴍᴇ/@ʙɪᴏxꜱᴇʀᴠɪᴄᴇ

ʙᴜʏ ʀʏᴢᴇɴ ᴡɪᴛʜ ʜᴀᴄᴋɪɴɢ ᴛᴏᴏʟꜱ ᴀɴᴅ ᴘʏᴛʜᴏɴ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ʟᴀɴɢᴜᴀɢᴇ 
            ⇓
ᴘᴠ = ᴛ.ᴍᴇ/@ʙɪᴏxꜱᴇʀᴠɪᴄᴇ

ɴᴏᴛᴇꜱ
ᴅᴇʟᴇᴛɪɴɢ ᴄʀᴇᴅɪᴛ ᴛʜᴇʀᴇ ᴡɪʟʟ ʙᴇ ɴᴏ ᴜᴘᴅᴀᴛᴇꜱ
*/
const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, slick) => {
return`\`Feature Developer\`
> gantifile
> getfile
> getcase
> getfunc
> getfile
> addcase
> delfolder
> backup

\`Clone Feature\`
> jadibot
> stopjadibot 

\`Ai Feature\`
> ai

\`Info Feature\`
> ping
   
\`Download Feature\`
> tiktok
> facebook
> instagram
> ytmp3
   
\`Convert Feature\`
> sticker
> smeta
> swm
> tourl 
> qc
> remini
> hdr
> removebg
   
\`Cyber Feature\`
> COMING SOON`
}

global.developermenu = (prefix, slick) => {
return`\`Feature Developer\`
> gantifile
> getfile
> getcase
> getfunc
> getfile
> addcase
> delfolder
> backup`
}

global.clonemenu = (prefix, slick) => {
return`\`Clone Feature\`
> jadibot
> stopjadibot `
}

global.aimenu = (prefix, slick) => {
return`\`Ai Feature\`
> ai`
}

global.infomenu = (prefix, slick) => {
return`\`Info Feature\`
> ping`
}

global.downloadmenu = (prefix, slick) => {
return`\`Download Feature\`
> tiktok
> facebook
> instagram
> ytmp3`
}

global.cybermenu = (prefix, slick) => {
return`\`Cyber Feature\`
COMING SOON`
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})