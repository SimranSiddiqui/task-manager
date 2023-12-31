//const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async ()=> {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB connected `);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


module.exports = connectDB;