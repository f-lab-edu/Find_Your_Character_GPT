import { Configuration, OpenAIApi, CreateChatCompletionRequest, CreateChatCompletionResponse } from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  basePath: "https://api.openai.com/v1",
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
  console.log(typeof value);

  if (value.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid value",
      },
    });
    return;
  }

  try {
    const completion = (await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: generateMessageText(value),
      temperature: 0.4,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })) as unknown as { data: CreateChatCompletionResponse };

    if (completion.data.choices?.length > 0) {
      res.status(200).json({ result: completion.data.choices[0].message.content });
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

export const generateMessageText = (buttonResult: string): CreateChatCompletionRequest["messages"] => {
  return [
    {
      role: "system",
      content: "Name one significant Harry Potter character and provide the character name and description as a JSON object. Must be your answers are based on the roles above",
    },
    {
      role: "user",
      content: "sex is women ,good concentration, Slytherin House, Honor over money",
    },
  ];
};
