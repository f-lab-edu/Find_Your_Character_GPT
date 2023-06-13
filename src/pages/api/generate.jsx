const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  basePath: "https://api.openai.com/v1",
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  console.log("is handler function working?");
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      },
    });
    return;
  }

  const value = req.body.value || "";
  console.log(value);
  if (value.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid value",
      },
    });
    return;
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello world" }],
    });
    res.status(200).json({ result: completion.data.choices[0].message.content });
    console.log(completion); // 질문하기 : 왜 gpt-3.5-turbo가 아닌 gpt-3.5-turbo0301이 출력하는 지 모르겠습니당
    console.log(completion.data.choices[0].message.content);
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}
