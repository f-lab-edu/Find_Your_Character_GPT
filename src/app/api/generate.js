const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function generateText(buttonDesc) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: buttonDesc,
    temperature: 0,
    max_tokens: 7,
  });

  console.log(response);
}

module.exports = {
  generateText,
};
