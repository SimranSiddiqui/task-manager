const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const Task = require('./models/taskModel');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');


const app = express();

//Middleware
app.use(
    cors({
    origin: ["http://localhost:3000", "https://task-manager-n8rr.onrender.com/"],
  })
);
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/api/tasks', taskRoutes);



//Routes
app.get('/', (req, res)=>{
    res.send("Home Page");
});

const PORT = process.env.PORT || 5000

const startServer = async() => {
    try {
        await connectDB();

        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
