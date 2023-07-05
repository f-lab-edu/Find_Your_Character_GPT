import { styled } from "styled-components";
import { FloatButton } from "../floatButton/FloatButton";
import { StartButton } from "../floatButton/StartButton";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { GlowText } from "../glowText/GlowText";
import { useRouter } from "next/navigation";
import { Loading } from "../loading/Loading";

interface GPTResult {
  name: string;
  description: string;
}

const stageResultState = atom<StageResult>({
  key: "stageResult",
  default: {},
});

const gptResultState = atom<GPTResult>({
  key: "gptResult",
  default: {
    name: "",
    description: "",
  },
});

export const stageNumberState = atom<number>({
  key: "stageNumber",
  default: 1,
});

export const loadingState = atom<boolean>({
  key: "loadingOpen",
  default: false,
});

type StageResult = {
  [key: string]: number;
};

interface GameDescBoxProps {
  descHeader: string;
  desc?: string;
  startButtonDesc?: string;
  buttonDesc: { text: string; state: string }[] | undefined;
}

export const GameDescBox = ({ descHeader, desc, startButtonDesc, buttonDesc }: GameDescBoxProps) => {
  const router = useRouter();
  const setGptResult = useSetRecoilState(gptResultState);
  const [stageResult, setStageResult] = useRecoilState<StageResult>(stageResultState);
  const [stageNumber, setStageNumber] = useRecoilState<number>(stageNumberState);
  const [loadingOpen, setLoadingOepn] = useRecoilState<boolean>(loadingState);

  async function clickHandlerGPT() {
    try {
      setLoadingOepn(true);
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: stageResult }),
      });
      console.log(response);

      let data = await response.json();
      console.log("GameDescBox", data);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      if (typeof data === "string") {
        data = JSON.parse(data);
      }

      setGptResult(data);
      if (response.status === 200) {
        setLoadingOepn(false);
        router.push("/result");
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }

  const clickHandler = (buttonState: string) => {
    if (stageNumber === 10) {
      clickHandlerGPT();
      return;
    }

    setStageNumber(stageNumber !== 10 ? Number(stageNumber) + 1 : Number(stageNumber));
    setStageResult((prevResult: StageResult) => {
      const updatedResult: StageResult = { ...prevResult };
      if (updatedResult[buttonState]) {
        updatedResult[buttonState] += 1;
      } else {
        updatedResult[buttonState] = 1;
      }
      return updatedResult;
    });
  };

  return (
    <>
      <GlowText size={40} desc={descHeader} />
      {!!startButtonDesc ? (
        <>
          <Desc>
            <div>내가 만약 해리포터 영화 속 주인공이라면?</div>
            <div>GPT가 찾아주는 나의 인생 마법사</div>
            <p>🧙🏻‍♀️ 🧙🏻‍♀️ 🧙🏻‍♀️ 🧙🏻‍♀️ 🧙🏻‍♀️</p>
          </Desc>
          <ButtonBox>
            <StartButton startButtonDesc={startButtonDesc} />
          </ButtonBox>
        </>
      ) : (
        <>
          <Desc>{desc}</Desc>
          <ButtonBox>
            {buttonDesc?.map((choice, i) => (
              <FloatButton buttonDesc={choice.text} buttonIndex={i} key={i} stageNumber={stageNumber} clickHandler={clickHandler} buttonState={choice.state} />
            ))}
          </ButtonBox>
          {loadingOpen && <Loading />}
        </>
      )}
    </>
  );
};

const Desc = styled.div`
  margin: 60px 20px 40px;
  font-size: 24px;
  text-align: center;
  white-space: pre;
  line-height: 1.5;
  color: #ffffff;
  @media (max-width: 800px) {
    font-size: 3vw;
  }
  p {
    font-size: 25px;
    @media (max-width: 800px) {
      font-size: 3vw;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  a {
    width: 70%;
  }
`;
