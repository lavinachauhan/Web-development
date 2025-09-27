const mongoose = require('mongoose');

main().then( () => {
    console.log("Connection succesful");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon" )
}

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        maxLength : 20
    },
    author : {
        type : String,
    }, 
    Price : {
        type : Number, 
        min : [1, "Price is too low for Amazon selling"],
    },
    Discount : {
        type : Number,
        default : 0
    }
})

const Book = mongoose.model("Book", bookSchema);

// const book1 = new Book({
//     // title : "Mathematics XII",
//     author : "RD Sharma",
//     Price : 1200
// })

// book1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err)
// })

// const book2 = new Book({
//     title : "Mathematics VIII",
//     Price : 1200
// })

// book2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err)
// })

// const book3 = new Book({
//     title : "Mathematics XI",
//     author : "RD Sharma",
//     Price : "acb",
// })

// book3.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err)
// })

// const book4 = new Book({
//     title : "Gone Girl",
//     Price : -12
// })

// book4.save()

Book.findByIdAndUpdate("68d806ac4dc0ee534a6ef201", {Price : -500}, {new :true, runValidators : true})
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err.errors)
})

