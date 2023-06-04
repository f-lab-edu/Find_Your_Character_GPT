const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      },
    });
    return;
  }

  const value = req.body.value || "";
  if (value.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid value",
      },
    });
    return;
  }
  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: generateText(value),
      temperature: 0.8,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
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

export function generateText(buttonDesc) {
  console.log(buttonDesc);
  console.log(`generateText() is called`);
  return `Suggest a character name that is appropriate for the Harry Potter story.

  userName: Nara
  characterName: Neville Longbottom
  userName: ${buttonDesc}
  characterName:`;
}
