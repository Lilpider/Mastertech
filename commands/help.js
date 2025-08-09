const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
▓█████▄  ▄▄▄       ███▄ ▄███▓ ██▓███   ██░ ██ 
▒██▀ ██▌▒████▄    ▓██▒▀█▀ ██▒▓██░  ██▒▓██░ ██▒
░██   █▌▒██  ▀█▄  ▓██    ▓██░▓██░ ██▓▒▒██▀▀██░
░▓█▄   ▌░██▄▄▄▄██ ▒██    ▒██ ▒██▄█▓▒ ▒░▓█ ░██ 
░▒████▓  ▓█   ▓██▒▒██▒   ░██▒▒██▒ ░  ░░▓█▒░██▓
 ▒▒▓  ▒  ▒▒   ▓▒█░░ ▒░   ░  ░▒▓▒░ ░  ░ ▒ ░░▒░▒
 ░ ▒  ▒   ▒   ▒▒ ░░  ░      ░░▒ ░      ▒ ░▒░ ░
 ░ ░  ░   ░   ▒   ░      ░   ░░        ░  ░░ ░
   ░          ░  ░       ░              ░  ░  ░
▄▄▄█████▓ ██░ ██ ▓█████  ██▓     ██▓    
▓  ██▒ ▓▒▓██░ ██▒▓█   ▀ ▓██▒    ▓██▒    
▒ ▓██░ ▒░▒██▀▀██░▒███   ▒██░    ▒██░    
░ ▓██▓ ░ ░▓█ ░██ ▒▓█  ▄ ▒██░    ▒██░    
  ▒██▒ ░ ░▓█▒░██▓░▒████▒░██████▒░██████▒
  ▒ ░░    ▒ ░░▒░▒░░ ▒░ ░░ ▒░▓  ░░ ▒░▓  ░
    ░     ▒ ░▒░ ░ ░ ░  ░░ ░ ▒  ░░ ░ ▒  ░
  ░       ░  ░░ ░   ░     ░ ░     ░ ░   
          ░  ░  ░   ░  ░    ░  ░    ░  ░

╔════════════════════════════════════════════╗
║  🔥 𝕄𝔸𝕊𝕋𝔼ℝ𝕋𝔼ℂℍ-𝕏𝔻 𝕍𝟙.𝟘.𝟘 🔥  ║
║  ✯ 𝕋ℍ𝔼 𝕄𝕆𝕊𝕋 ℙ𝕆𝕎𝔼ℝ𝔽𝕌𝕃 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ 𝔹𝕆𝕋 ✯  ║
╠════════════════════════════════════════════╣
║  👑 𝕆𝕨𝕟𝕖𝕣: 𝕄𝔸𝕊𝕋𝔼ℝℙ𝔼𝔸ℂ𝔼 𝔼𝕃𝕀𝕋𝔼          ║
║  🌟 𝕍𝕖𝕣𝕤𝕚𝕠𝕟: 𝟙.𝟘.𝟘 | 𝕊𝕥𝕒𝕥𝕦𝕤: 𝕆𝕟𝕝𝕚𝕟𝕖 ║
║  📡 𝕐𝕠𝕦𝕋𝕦𝕓𝕖: [ℕ𝕠𝕥 𝕊𝕖𝕥]                 ║
╚════════════════════════════════════════════╝

╔══════════════╦══════════════╦══════════════╗
║  🚀 𝔾𝔼ℕ𝔼ℝ𝔸𝕃  ║  🛡️ 𝔸�𝕄𝕀ℕ   ║  👑 𝕆𝕎ℕ𝔼ℝ   ║
╠══════════════╬══════════════╬══════════════╣
║ • .help/menu ║ • .ban       ║ • .mode      ║
║ • .ping      ║ • .promote   ║ • .autostatus║
║ • .alive     ║ • .demote    ║ • .clearsess ║
║ • .tts       ║ • .mute      ║ • .antidelete║
║ • .owner     ║ • .unmute    ║ • .cleartmp  ║
║ • .joke      ║ • .del       ║ • .setpp     ║
║ • .quote     ║ • .kick      ║ • .autoreact ║
║ • .fact      ║ • .warn      ║              ║
║ • .weather   ║ • .antilink  ║              ║
║ • .news      ║ • .antibad   ║              ║
║ • .attp      ║ • .clear     ║              ║
║ • .lyrics    ║ • .tag       ║              ║
║ • .8ball     ║ • .tagall    ║              ║
║ • .groupinfo ║ • .chatbot   ║              ║
║ • .staff     ║ • .resetlink ║              ║
║ • .vv        ║ • .welcome   ║              ║
║ • .trt       ║ • .goodbye   ║              ║
║ • .ss        ║              ║              ║
║ • .jid       ║              ║              ║
╚══════════════╩══════════════╩══════════════╝

╔══════════════╦══════════════╦══════════════╗
║  � 𝕄𝔼𝔻𝕀𝔸   ║  🎯 𝔾𝔸𝕄𝔼𝕊   ║  🤖 𝔸𝕀      ║
╠══════════════╬══════════════╬══════════════╣
║ • .sticker   ║ • .tictactoe ║ • .gpt       ║
║ • .simage    ║ • .hangman   ║ • .gemini    ║
║ • .tgsticker ║ • .guess     ║ • .imagine   ║
║ • .meme      ║ • .trivia    ║ • .flux      ║
║ • .take      ║ • .answer    ║              ║
║ • .emojimix  ║ • .truth     ║              ║
║ • .blur      ║ • .dare      ║              ║
╚══════════════╩══════════════╩══════════════╝

╔══════════════╦══════════════╦══════════════╗
║  🎭 𝔽𝕌ℕ      ║  ✍️ 𝕋𝔼𝕏𝕋    ║  📥 𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 ║
╠══════════════╬══════════════╬══════════════╣
║ • .compliment║ • .metallic  ║ • .play      ║
║ • .insult    ║ • .ice       ║ • .song      ║
║ • .flirt     ║ • .snow      ║ • .instagram ║
║ • .shayari   ║ • .impressive║ • .facebook  ║
║ • .goodnight ║ • .matrix    ║ • .tiktok    ║
║ • .roseday   ║ • .light     ║ • .video     ║
║ • .character ║ • .neon      ║ • .ytmp4     ║
║ • .wasted    ║ • .devil     ║              ║
║ • .ship      ║ • .purple    ║              ║
║ • .simp      ║ • .thunder   ║              ║
║ • .stupid    ║ • .leaves    ║              ║
║              ║ • .1917      ║              ║
║              ║ • .arena     ║              ║
║              ║ • .hacker    ║              ║
║              ║ • .sand      ║              ║
║              ║ • .blackpink ║              ║
║              ║ • .glitch    ║              ║
║              ║ • .fire      ║              ║
╚══════════════╩══════════════╩══════════════╝

████████████████████████████████████████████████
█▄─▄▄▄▄█─▄▄▄─█▄─▄▄▀█▄─▄█─▄▄▄▄█─▄─▄─█─█─█▄─▄─▀█
██─██▄─█─███▀██─▄─▄██─██▄▄▄▄─███─███─▄─██─▄─▀█
▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▀▄▄▀▄▄▄▀▄▄▄▄▄▀▀▄▄▄▀▀▄▀▄▀▄▄▄▄▀▀
Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'ELITE-XD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'ELITE-XD BY MASTERPEACE ELITE',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
