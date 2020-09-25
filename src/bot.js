process.env.NTBA_FIX_319 = 1
const TelegramBot = require("node-telegram-bot-api");




const fs = require("fs");
const rawData =fs.readFileSync("dersProgram.json");
const data = JSON.parse(rawData);





const token = "1316241368:AAFx9luuzLiNLvXPBVh_VzqQ9oo8MtaUaOM";

const bot = new TelegramBot(token , {polling:true});

bot.onText(/\/start/ , (msg,match)=>{
    const chatId = msg.chat.id;

    bot.sendMessage(chatId , `BTÜ Bilgisayar Mühendisliği Ders Programı Botuna Hoş Geldiniz.\nBotun nasıl çalıştığını görmek için "/yardim" komutunu kullanınız.`);
});
bot.onText(/\/yardim/ , (msg,match)=>{
    const chatId = msg.chat.id;

    bot.sendMessage(chatId , `Bulmak istediğiniz derse 3 farklı şekilde ulaşabilirsiniz:\n1: "/ders" kodunu yazdıktan sonra bir boşluk bırakıp ders adını yazarak.\n2:"/kod" kodunu yazdıktan sonra bir boşluk bırakıp ders kodunu yazarak.\n3:"/ogretmen" kodunu yazdıktan sonra bir boşluk bırakıp ders öğretmeninin adını yazarak\nDersin veya Öğretim görevlisinin tam adını bilmiyosanız bile hatırladığınız bir kelimeyi yazarsanız uyan tüm sonuçlar görüntülenir.`);
})



bot.onText(/\/ogretmen (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    let count =0;
        data.forEach((ders)=>{
            if(ders.ogretmen.toLowerCase().includes(match[1].toLowerCase())){
                bot.sendMessage(chatId , 
                `Ders:${ders.ders}\nDers Kodu:${ders.kod}\nDers Öğretmeni:${ders.ogretmen}\nGün:${ders.gun}\nSaat:${ders.saat}\n\n`
                );
                count+=1;
            }
        });
    if(count === 0){
        bot.sendMessage(chatId, `${match[1]} adını içeren herhangi bir öğretmen bulunamadı.`);
    }
    
});

bot.onText(/\/ders (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    let count =0;
        data.forEach((ders)=>{
            if(ders.ders.toLowerCase().includes(match[1].toLowerCase())){
                bot.sendMessage(chatId , 
                `Ders:${ders.ders}\nDers Kodu:${ders.kod}\nDers Öğretmeni:${ders.ogretmen}\nGün:${ders.gun}\nSaat:${ders.saat}\n\n`
                );
                count+=1;
            }
        });
    
        if(count === 0){
            bot.sendMessage(chatId, `${match[1]} adını içeren herhangi bir ders bulunamadı.`);
        }
});

bot.onText(/\/kod (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    let count =0;
        data.forEach((ders)=>{
            if(ders.kod.toLowerCase().includes(match[1].toLowerCase())){
                bot.sendMessage(chatId , 
                `Ders:${ders.ders}\nDers Kodu:${ders.kod}\nDers Öğretmeni:${ders.ogretmen}\nGün:${ders.gun}\nSaat:${ders.saat}\n\n`
                );
                count+=1;
            }
        });
    
        if(count === 0){
            bot.sendMessage(chatId, `${match[1]} kodunu içeren herhangi bir ders bulunamadı.`);
        }
});

    








