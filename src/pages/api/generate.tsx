import openAI from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import { OpenAIStream } from "ai";

export const config = {
  runtime: "edge",
};

const openai = new openAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function parseRequestBody(req: NextApiRequest) {
  const chunks = [];
  for await (const chunk of req.body) {
    chunks.push(chunk);
  }
  const a = Buffer.concat(chunks).toString("utf-8");
  return JSON.parse(a);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!openai.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      },
    });
    return;
  }

  const value = await parseRequestBody(req);

  if (value.length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid value",
      },
    });
    return;
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: [
            "Fill the JSON with one of main characters in Harry Potter story based on given stats. Each stats is scored out of 8. Prefix should be one sentence that expresses the chosen character. For the description, write an article that can explain the character and personality. Please refer to the example given to achieve a similar result. Never ask me back a question. Output must be in Korean.",
            `example Input : { "주도적인": 2, "마법능력": 3, "악랄함": 0, "섬세함": 4, "활발함": 3 }`,
            `example Output : {"prefix":"개성있지만 배려심 있는","name": "루나 러브굿","description":"루나는 매우 창의적이며 꿈꾸는 성격을 가지고 있습니다. 그녀는 상상력이 풍부하며 독특한 이론을 고민하고 탐구하는 것을 즐깁니다. 루나는 다른 사람들이 이해하기 어려운 주제에 대해 열정적으로 이야기하고, 항상 독특하고 흥미로운 아이디어를 제시합니다. 그녀는 특이한 동료들과 어울려 소수의 가치관을 공유하는 친구를 찾아가는 경향이 있습니다.하지만 루나의 개성적인 성격은 때로는 다른 사람들로부터 이상하게 여겨지기도 합니다. 그녀는 상상력과 현실 사이의 경계를 넘나드는 주장과 이야기로 인해 다른 사람들의 조롱과 비웃음을 자주 받는 편입니다. 그러나 루나는 이를 신경쓰지 않고 자신의 신념을 지키며, 진정한 자기를 표현합니다. 그녀는 용기와 결단력을 지니고 있으며, 특별한 능력을 가진 친구들의 도움을 받아 해리 포터와 함께 어둠의 세력과 싸웁니다. 루나 러브굿은 독특한 외모와 창의적인 성격, 그리고 진정성과 용기로 많은 팬들에게 사랑받는 해리 포터 시리즈의 아이콘적인 캐릭터입니다.","suitable":"해리포터","unsuitable":"드레이코 말포이"}`,
            `Input:${JSON.stringify(value)}`,
          ].join("\n"),
        },
      ],
      temperature: 0.7,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: true,
    });

    const stream = await OpenAIStream(completion);
    return new Response(stream);
  } catch (error) {
    console.error(`Error with OpenAI API request: ${(error as Error).message}`);
    return new Response(JSON.stringify({ error: "An error occurred during your request." }), { status: 500 });
  }
}
