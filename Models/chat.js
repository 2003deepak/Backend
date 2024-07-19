const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
 
  email:{
    type: mongoose.Schema.Types.ObjectId,
    ref : "user"
  },
  chatData : [
    {
      question: String,
      answer: String
    }
  ]

});

module.exports = mongoose.model("chat", chatSchema);
