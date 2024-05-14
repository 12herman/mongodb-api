const express = require('express');
const movieRouters = require("./routes/movies.route");
const connectDB = require('./lib/db');


const app = express();
const port = 6969;

// Data understanding middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ConnectDB
connectDB();

app.get('/',(req,res)=> {
    res.json({message:"Hello student"})
});

// CRUD functionality ()
app.use('/movies',movieRouters);


app.listen(port,()=>{
    console.log(`The server is running at http://localhost:${port}`);
});