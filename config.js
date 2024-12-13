global.owner = [
  "994407122025",
  "994406212730"
]
global.anitav4 = "★★𝗥𝐀𝐉-𝐁𝐎𝐓-𝐎𝐅𝐂★★"
global.ownername = "Raj Kumar"
global.packname = "RajWhatsApp"
global.author = "+994407122025"
global.channelname = "Raj WhatsApp"
global.channeljid = "120363315231436175@newsletter"
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.autoViewStatus = true;   // Set to true to automatically read statuses
global.AUTOSTATUS_REACT = true;   // Set to true to automatically like statuses
global.autoLikeEmoji = "🦜";    // Default emoji for liking statuses

global.LEVELUP = false;


global.ANTIVIEWONCE = true;

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};

global.sudoUsers = ["919064884766@s.whatsapp.net", "994407122025@s.whatsapp.net"]; // Add the JIDs of sudo users



global.public = true


global.ANTIDELETE = true;  

global.unavailable = false;     
//to show your real presence  
global.available = true;   
// to show always online  
global.autoreadmessages = false;   
///To always read messages
global.chatbot = true;
global.autoreact = true;

global.WELCOME = false;

global.prefix = '.';

global.autobio = false;

global.ANTICALL = false;

global.antilink = true;

global.antilinkkick = true;

global.antilinkwarn = true;

global.mess = {
    success: '𝙳𝚘𝚗𝚎',
    admin: '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: '_(❗This Command Can Only Be Used In Private Chat !*_',
    wait: '_*Please Wait*_',
    notregist: '_*You are not registered in the Bot Database. Please register first_*',
    premium: '_*Premium only" Want Premium? Chat Owner_*',
    endLimit: '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
