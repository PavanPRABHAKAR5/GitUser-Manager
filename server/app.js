const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const userRoutes = require('./routes/users');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/users', userRoutes);



app.listen(3000, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server is running in port 3000")
    }
})

