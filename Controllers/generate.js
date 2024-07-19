const userModel = require("../Models/user")
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyBqIVja62T_cH-aPr0pXm2SO0kx_GU04WI");


const generate = async (req, res) => {

    const prompt = req.params.question;

   
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    
    return res.status(200).json({ message: text });
    


}

module.exports = generate ; 