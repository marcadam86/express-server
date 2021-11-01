const mongoose = require('mongoose')

const connectDb = async () => {
    await mongoose.connect('mongodb://localhost/kfc' , {
        userNewUrlParser: true,
        useUnifiedTopology: true,
        userFindAndModify: true,
        useCreateIndex: true
    }).then((con) => console.log('Connection Successful'))
}
module.expports = connectDb