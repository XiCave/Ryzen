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
const {
    default: WADefault,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto,
    makeCacheableSignalKeyStore, 
    PHONENUMBER_MCC
} = require("@adiwajshing/baileys")
const NodeCache = require("node-cache")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const pino = require('pino')
const pairingCode = true
const useMobile = false
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const {
    Boom
} = require('@hapi/boom')
const fs = require('fs')
const axios = require('axios')
const FileType = require('file-type')
const fetch = require('node-fetch')
const PhoneNumber = require('awesome-phonenumber')
const path = require('path')
const {
    smsg,
    getBuffer,
    fetchJson,
    TelegraPh
} = require('./lib/function')
const {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    writeExif
} = require('./lib/exif')
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query,
    ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
    } : {})
})) : '')

function nocache(module, cb = () => {}) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        }
        catch (e) {
            reject(e)
        }
    })
}

async function Botstarted() {
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(`./${sessionName}`)
    const { version, isLatest } = await fetchLatestBaileysVersion();
    const msgRetryCounterCache = new NodeCache()
    const client = WADefault({
        version,
        logger: pino({ level: "fatal" }).child({ level: "fatal" }),
        printQRInTerminal: !pairingCode,
        mobile: useMobile, 
        browser: ["Ubuntu","Chrome","20.0.04"],
        auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
	    generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined,

    })
function _0x2771(_0xb78394,_0x85f316){const _0x451568=_0x4515();return _0x2771=function(_0x2771a9,_0x2df0f3){_0x2771a9=_0x2771a9-0x1f1;let _0x594c6a=_0x451568[_0x2771a9];return _0x594c6a;},_0x2771(_0xb78394,_0x85f316);}function _0x4515(){const _0x2590e9=['6MoJNfq','keys','../config','status@broadcast','Mulai\x20Dengan\x20Nomor\x20Kode\x20Negara\x20Whatsappmu,\x20Contoh\x20:\x2062xxx','remoteJid','log','join','24YJWzUa','key','server','replace','creds','26jZvdRc','15903onamXJ','close','user','3340560LwZnwW','Silahkan\x20Ketik\x20Nomor\x20Whatsapp\x20Kamu\x20:\x20','requestPairingCode','message','authState','728106fWmNDO','bind','\x22\x20Telah\x20diupdate!','BAE5','public','test','startsWith','1390011YRzUWQ','notify','136wfXWfD','decodeJid','some','./message','294609gigKer','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api','125365fiznOg','4418359IRrcdI','type','messages.upsert','ephemeralMessage','7860ZOUFYQ','match'];_0x4515=function(){return _0x2590e9;};return _0x4515();}const _0x3397d9=_0x2771;(function(_0x485ad0,_0x408f6b){const _0x249466=_0x2771,_0x15050e=_0x485ad0();while(!![]){try{const _0x2a96e4=-parseInt(_0x249466(0x1ff))/0x1+parseInt(_0x249466(0x1f6))/0x2*(parseInt(_0x249466(0x20c))/0x3)+-parseInt(_0x249466(0x208))/0x4*(parseInt(_0x249466(0x20e))/0x5)+parseInt(_0x249466(0x215))/0x6*(parseInt(_0x249466(0x206))/0x7)+parseInt(_0x249466(0x1fa))/0x8+-parseInt(_0x249466(0x1f7))/0x9*(-parseInt(_0x249466(0x213))/0xa)+-parseInt(_0x249466(0x20f))/0xb*(parseInt(_0x249466(0x1f1))/0xc);if(_0x2a96e4===_0x408f6b)break;else _0x15050e['push'](_0x15050e['shift']());}catch(_0xeb8d9f){_0x15050e['push'](_0x15050e['shift']());}}}(_0x4515,0xdb2b6),require(_0x3397d9(0x20b)),nocache('./message',_0x356047=>console[_0x3397d9(0x21b)]('\x20\x22'+_0x356047+_0x3397d9(0x201))),nocache(_0x3397d9(0x217),_0x5ec1c9=>console['log']('\x20\x22'+_0x5ec1c9+_0x3397d9(0x201))),store[_0x3397d9(0x200)](client['ev']),client['ev']['on'](_0x3397d9(0x211),async _0x51cd4d=>{const _0x8469cf=_0x3397d9;try{mek=_0x51cd4d['messages'][0x0];if(!mek[_0x8469cf(0x1fd)])return;mek['message']=Object['keys'](mek[_0x8469cf(0x1fd)])[0x0]==='ephemeralMessage'?mek[_0x8469cf(0x1fd)][_0x8469cf(0x212)][_0x8469cf(0x1fd)]:mek['message'];if(mek['key']&&mek[_0x8469cf(0x1f2)][_0x8469cf(0x21a)]===_0x8469cf(0x218))return;if(!client[_0x8469cf(0x203)]&&!mek[_0x8469cf(0x1f2)]['fromMe']&&_0x51cd4d[_0x8469cf(0x210)]===_0x8469cf(0x207))return;if(mek['key']['id'][_0x8469cf(0x205)](_0x8469cf(0x202))&&mek[_0x8469cf(0x1f2)]['id']['length']===0x10)return;m=smsg(client,mek,store),require(_0x8469cf(0x20b))(client,m,_0x51cd4d,store);}catch(_0x192aa4){console[_0x8469cf(0x21b)](_0x192aa4);}}));if(pairingCode&&!client[_0x3397d9(0x1fe)][_0x3397d9(0x1f5)]['registered']){if(useMobile)throw new Error(_0x3397d9(0x20d));let phoneNumber;!!pairingNumber?(phoneNumber=pairingNumber['replace'](/[^0-9]/g,''),!Object[_0x3397d9(0x216)](PHONENUMBER_MCC)[_0x3397d9(0x20a)](_0x33cfa5=>phoneNumber[_0x3397d9(0x205)](_0x33cfa5))&&(console[_0x3397d9(0x21b)](_0x3397d9(0x219)),process['exit'](0x0))):(phoneNumber=await question(_0x3397d9(0x1fb)),phoneNumber=phoneNumber[_0x3397d9(0x1f4)](/[^0-9]/g,''),!Object['keys'](PHONENUMBER_MCC)[_0x3397d9(0x20a)](_0x161ec3=>phoneNumber[_0x3397d9(0x205)](_0x161ec3))&&(console['log'](_0x3397d9(0x219)),phoneNumber=await question('Silahkan\x20Ketik\x20Nomor\x20Whatsapp\x20Kamu\x20:\x20'),phoneNumber=phoneNumber[_0x3397d9(0x1f4)](/[^0-9]/g,''),rl[_0x3397d9(0x1f8)]())),setTimeout(async()=>{const _0x2ce3b7=_0x3397d9;let _0x4dd414=await client[_0x2ce3b7(0x1fc)](phoneNumber);_0x4dd414=_0x4dd414?.[_0x2ce3b7(0x214)](/.{1,4}/g)?.[_0x2ce3b7(0x21c)]('-')||_0x4dd414,console['log']('\x0a\x0aCode\x20Pairing\x20Kamu\x20:',_0x4dd414);},0xbb8);}client[_0x3397d9(0x209)]=_0x29756b=>{const _0x135e6c=_0x3397d9;if(!_0x29756b)return _0x29756b;if(/:\d+@/gi[_0x135e6c(0x204)](_0x29756b)){let _0xd6d90=jidDecode(_0x29756b)||{};return _0xd6d90[_0x135e6c(0x1f9)]&&_0xd6d90['server']&&_0xd6d90[_0x135e6c(0x1f9)]+'@'+_0xd6d90[_0x135e6c(0x1f3)]||_0x29756b;}else return _0x29756b;};

    client.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = client.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    client.getName = (jid, withoutContact = false) => {
        id = client.decodeJid(jid)
        withoutContact = client.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = client.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === client.decodeJid(client.user.id) ?
            client.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    client.sendContact = async (jid, kon, quoted = '', opts = {}) => {
        let list = []
        for (let i of kon) {
            list.push({
                displayName: await client.getName(i + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await client.getName(i + '@s.whatsapp.net')}\nFN:${await client.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            })
        }
        client.sendMessage(jid, {
            contacts: {
                displayName: `${list.length} Kontak`,
                contacts: list
            },
            ...opts
        }, {
            quoted
        })
    }
    
    client.public = true

    client.serializeM = (m) => smsg(client, m, store)
    
    client.reSize = async (image, width, height) => {
        let jimp = require('jimp')
            var oyy = await jimp.read(image);
         var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
        return kiyomasa
    }

    client.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect
        } = update
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) {
                console.log(`Bad Session File, Please Delete Session and Scan Again`);
                client.logout();
            }
            else if (reason === DisconnectReason.connectionClosed) {
                console.log("Connection closed, reconnecting....");
                Botstarted();
            }
            else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server, reconnecting...");
                Botstarted();
            }
            else if (reason === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, reconnecting...");
                Botstarted();
            }
            else if (reason === DisconnectReason.loggedOut) {
                console.log(`Device Logged Out, Please Scan Again And Run.`);
                client.logout();
            }
            else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...");
                Botstarted();
            }
            else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut, Reconnecting...");
                Botstarted();
            }
            else if (reason === DisconnectReason.Multidevicemismatch) {
                console.log("Multi device mismatch, please scan again");
                client.logout();
            }
            else client.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        if (update.connection == "open" || update.receivedPendingNotifications == "true") {
            client.sendMessage(global.owner + "@s.whatsapp.net", { text: `*_Ryzen Online_*` });
        }
    })

    client.ev.on('creds.update', saveCreds)

    client.sendText = (jid, text, quoted = '', options) => client.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })

    client.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }

    client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {

        let quoted = message.msg ? message.msg : message

        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    client.sendTextWithMentions = async (jid, text, quoted, options = {}) => client.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    client.getFile = async (PATH, returnAsFilename) => {
        let res, filename
        const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        const type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
        return {
            res,
            filename,
            ...type,
            data,
            deleteFile() {
                return filename && fs.promises.unlink(filename)
            }
        }
    }

    client.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await client.getFile(path, true)
        let {
            res,
            data: file,
            filename: pathFile
        } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw {
                    json: JSON.parse(file.toString())
                }
            }
            catch (e) {
                if (e.json) throw e.json
            }
        }
        let opt = {
            filename
        }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '',
            mimetype = type.mime,
            convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime))(
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        if (options.asDocument) mtype = 'document'

        delete options.asSticker
        delete options.asLocation
        delete options.asVideo
        delete options.asDocument
        delete options.asImage

        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: {
                url: pathFile
            },
            mimetype
        }
        let m
        try {
            m = await client.sendMessage(jid, message, {
                ...opt,
                ...options
            })
        }
        catch (e) {
            //console.error(e)
            m = null
        }
        finally {
            if (!m) m = await client.sendMessage(jid, {
                ...message,
                [mtype]: file
            }, {
                ...opt,
                ...options
            })
            file = null
            return m
        }
    }
    client.sendMedia = async (jid, path, filename, quoted = '', options = {}) => {
        let {
            ext,
            mime,
            data
        } = await client.getFile(path)
        messageType = mime.split("/")[0]
        pase = messageType.replace('application', 'document') || messageType
        return await client.sendMessage(jid, {
            [`${pase}`]: data,
            mimetype: mime,
            fileName: filename + ext ? filename + ext : getRandom(ext),
            ...options
        }, {
            quoted
        })
    }
    client.sendMediaAsSticker = async (jid, path, quoted, options = {}) => {
      let {
         ext,
         mime,
         data
      } = await client.getFile(path)
      let media = {}
      let buffer
      media.data = data
      media.mimetype = mime
      if (options && (options.packname || options.author)) {
         buffer = await writeExif(media, options)
      } else {
         buffer = /image/.test(mime) ? await imageToWebp(data) : /video/.test(mime) ? await videoToWebp(data) : ""
      }
      await client.sendMessage(jid, {
         sticker: {
            url: buffer
         },
         ...options
      }, {
         quoted
      })
      return buffer
   }
   client.imgToSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

    client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        }
        else {
            buffer = await imageToWebp(buff)
        }

        await client.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }

    client.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        }
        else {
            buffer = await videoToWebp(buff)
        }

        await client.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }

    return client
}

Botstarted()
