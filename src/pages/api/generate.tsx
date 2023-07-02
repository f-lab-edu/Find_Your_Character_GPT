import { Configuration, OpenAIApi, CreateChatCompletionRequest, CreateChatCompletionResponse } from "openai";
import { NextApiRequest, NextApiResponse } from "next";
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
      messages: [
        {
          role: "user",
          content: [
            "Give me name and a brief description of one of main characters in Harry Potter based on given stats. Each stats is scored out of 8. Never ask me back a question. Output must be in Korean.",
            `{"활발함": 1, "섬세함": 1, "악랄함": 8, "마법능력": 8, "주도적인": 8}`,
            `{name: "볼드모트", description: "볼드모트(Voldemort)는 마법 세계에서 악명 높은 어둠의 마법사입니다.\n\n볼드모트는 극도로 악랄하고 잔인한 성격을 지니고 있으며, 그의 마법 능력은 놀라울 정도로 강력합니다. 그는 어둠의 마법과 저주를 다루며, 그의 목표는 마법계열 인종을 지배하고 세계를 정복하는 것입니다.\n\n볼드모트는 주도적이고 지배적인 성격으로 알려져 있으며, 그의 추종자들에게 사람들을 조종하고 마법세계를 통제하는 방법을 가르치기도 합니다. 그의 권력에 끌려 따르는 이들은 그의 명령에 절대적으로 복종하며, 그에게 충성을 다하는 모습을 보여줍니다.\n\n볼드모트는 해리 포터와의 치열한 대립을 통해 시리즈의 중요한 요소로 작용하며, 그의 악랄한 행동과 마법능력은 많은 독자들에게 강한 인상을 남기기도 했습니다."},`,
            `${value}`,
          ].join("\n"),
        },
      ],
      temperature: 0.4,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (completion.data.choices.length > 0 && completion.data.choices[0].message) {
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
