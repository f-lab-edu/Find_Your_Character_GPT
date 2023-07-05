import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import { log } from "console";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  basePath: "https://api.openai.com/v1",
});
const openai = new OpenAIApi(configuration);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      },
    });
    return;
  }
  const value: string[] = req.body?.value ?? [];
  console.log("stat value : ", value);

  if (value.length === 0) {
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
      messages: [
        {
          role: "user",
          content: [
            "Give me your name and a brief description of one of main characters in Harry Potter story based on given stats. Each stats is scored out of 8. The description must be a story of the character from Harry Potter. Never ask me back a question. Output must be in Korean.",
            `{name: "",description:""}`,
            `${JSON.stringify(value)}`,
          ].join("\n"),
        },
      ],
      temperature: 0.5,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (completion.data.choices.length > 0 && completion.data.choices[0].message) {
      res.status(200).json(JSON.stringify(completion.data.choices[0].message.content));
      console.log(completion.data.choices[0].message.content);
    } else {
      res.status(500).json({
        error: {
          message: "No completion choices available",
        },
      });
    }
  } catch (error) {
    console.error(`Error with OpenAI API request: ${(error as Error).message}`);
    res.status(500).json({
      error: {
        message: "An error occurred during your request.",
      },
    });
  }
}
