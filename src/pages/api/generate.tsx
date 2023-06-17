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
      messages: [
        {
          role: "system",
          content: "Give me a significant Harry Potter character name and its brief description in Korean.Each stats is scored out of 10.",
        },
        {
          role: "user",
          content: "섬세함: 5, 활발함: 8, 악랄함: 8, 정의로움: 3, 마법능력: 8",
        },
        {
          role: "assistant",
          content:
            '{name: "벨라트릭스 레스트레인지",description:"벨라트릭스 레스트레인지(Bellatrix Lestrange)는 어둠의 마법사인 보디모트의 추종자이며, 악당으로서 시리즈 내에서 중요한 역할을 맡습니다.\n\n벨라트릭스는 블랙 가문의 일원으로 태어났습니다. 그녀는 아름다우면서 동시에 극도로 사나운 성격을 지니고 있으며, 어린 시절부터 어두운 마법과 블랙 가문의 가치를 적극적으로 수용하였습니다. 벨라트릭스의 가문은 순수혈통 마법사 가문으로 알려져 있으며, 그녀는 이 가문의 자부심을 극대화하기 위해 노력했습니다.\n\n벨라트릭스는 어릴 적부터 호그와트 마법학교에 다니면서 어둠의 마법을 연마하였으며, 그녀의 동기는 다크 마법사 보디모트에게 대한 집착과 충성입니다. 벨라트릭스는 보디모트의 가장 충실한 추종자 중 한 명으로 간주되며, 그녀는 그의 명령에 무조건 복종하고 진심으로 그를 숭배했습니다. 그녀는 보디모트를 위해 많은 범죄를 저질렀으며, 그 중에서도 가장 유명한 것은 해리 포터의 부모를 살해한 사건입니다."},',
        },
        {
          role: "user",
          content: "섬세함: 7, 활발함: 8, 악랄함: 2, 정의로움: 9, 마법능력: 6 ",
        },
      ],
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

export const generateMessageText = (buttonResult: string): CreateChatCompletionRequest => {
  return [
    {
      role: "system",
      content: "Give me a significant Harry Potter character name and its brief description in Korean.Each stats is scored out of 10.",
    },
    {
      role: "user",
      content: "섬세함: 5, 활발함: 8, 악랄함: 8, 정의로움: 3, 마법능력: 8 ",
    },
    {
      role: "assistant",
      content: {
        name: "벨라트릭스 레스트레인지",
        description:
          "벨라트릭스 레스트레인지(Bellatrix Lestrange)는 어둠의 마법사인 보디모트의 추종자이며, 악당으로서 시리즈 내에서 중요한 역할을 맡습니다.\n\n벨라트릭스는 블랙 가문의 일원으로 태어났습니다. 그녀는 아름다우면서 동시에 극도로 사나운 성격을 지니고 있으며, 어린 시절부터 어두운 마법과 블랙 가문의 가치를 적극적으로 수용하였습니다. 벨라트릭스의 가문은 순수혈통 마법사 가문으로 알려져 있으며, 그녀는 이 가문의 자부심을 극대화하기 위해 노력했습니다.\n\n벨라트릭스는 어릴 적부터 호그와트 마법학교에 다니면서 어둠의 마법을 연마하였으며, 그녀의 동기는 다크 마법사 보디모트에게 대한 집착과 충성입니다. 벨라트릭스는 보디모트의 가장 충실한 추종자 중 한 명으로 간주되며, 그녀는 그의 명령에 무조건 복종하고 진심으로 그를 숭배했습니다. 그녀는 보디모트를 위해 많은 범죄를 저질렀으며, 그 중에서도 가장 유명한 것은 해리 포터의 부모를 살해한 사건입니다.\n\n벨라트릭스는 결혼하여 로드볼트 레스트레인지(Rodolphus Lestrange)와 부부가 되었지만, 그녀의 충성은 여전히 보디모트에게 돌아가 있었습니다. 그녀는 어둠의 마법과 순수혈통 사회에 대한 열망으로 인해 자신의 가족과 자유를 포기했습니다.\n\n캐릭터로서, 벨라트릭스는 사나운 성격과 잔인한 행동으로 악당으로서의 역할을 수행합니다. 그녀는 해리 포터와의 대립에서 그 중요한 적이며, 시리즈 내에서 그녀의 행동은 주인공들에게 많은 위협을 안겨줍니다.",
      },
    },
    {
      role: "user",
      content: "섬세함: 7, 활발함: 8, 악랄함: 2, 정의로움: 9, 마법능력: 6 ",
    },
  ];
};
