const mongoose = require("mongoose"); 
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("Connection Succesful");
    })
    .catch((err) => {
        console.log(err);
    })

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
    from : "Dipika",
    to : "Rani", 
    msg : "send me your exam sresult",
    created_at: new Date()
    },

    {
    from : "Gunjan",
    to : "Jyoti", 
    msg : "Yes you are right",
    created_at: new Date()
    },

    {
    from : "Simran",
    to : "Jhanvi", 
    msg : "Kisne kha hai tuje ye",
    created_at: new Date()
    },

    {
    from : "Shilpa",
    to : "Tripti", 
    msg : "Love you my lil sis",
    created_at: new Date()
    },

    {
    from : "Sharad",
    to : "Labina", 
    msg : "I'm was happy when I was with you",
    created_at: new Date()
    },

    {
    from : "Soni",
    to : "Swati", 
    msg : "hn bhai shi h",
    created_at: new Date()
    }
]
Chat.insertMany(allChats);