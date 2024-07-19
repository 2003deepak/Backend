const chatModel = require("../Models/chat");

const chatSave = async (req, res) => {
  const { email, chatHistory } = req.body;

  try {
    const user = await chatModel.findOne({ email: email });

    if (user) {
      user.chatData = [...user.chatData, ...chatHistory];
      await user.save();
      res.status(200).json({ message: 'Chat saved' });
    } else {
      await chatModel.create({
        email: email,
        chatData: chatHistory
      });
      res.status(200).json({ message: 'Chat saved' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = chatSave;
