require("dotenv").config()
const express = require('express');
const db = require('./Config/mongoose-connection');
const userModel = require("./Models/user");
const chatModel = require('./Models/chat');
const login = require('./Controllers/login');
const generate = require('./Controllers/generate');
const cors = require('cors');
const env = require('dotenv');
const chatSave = require('./Controllers/chatSave');
const cookieParser = require("cookie-parser");
const app = express();

const PORT = process.env.PORT || 8000 ; 

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.post('/login', login);
app.get('/generate/:question', generate);
app.post('/saveChat', chatSave);

app.post("/getChat" , async (req,res)=>{

  let id = req.body.email;

  let chat = await chatModel.findOne({ email : id });

  if(chat){
    res.status(200).json({ message: chat.chatData });
  }else {
    res.status(200).json({ message: 'No chat history found' });
  }



})


app.listen(8000);