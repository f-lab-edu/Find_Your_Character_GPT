import { styled } from "styled-components";
import { FloatButton } from "../floatButton/FloatButton";
import { StartButton } from "../floatButton/StartButton";
import { useState } from "react";
import { atom, useRecoilState } from "recoil";
import { GlowText } from "../glowText/GlowText";

const stageResultState = atom<string[]>({
  key: "stageResult",
  default: [],
});

interface GameDescBoxProps {
  descHeader: string;
  desc: string;
  startButtonDesc?: string;
  buttonDesc: string[];
  stageNumber: string;
}

export const GameDescBox = ({ descHeader, desc, startButtonDesc, buttonDesc, stageNumber }: GameDescBoxProps) => {
  const [gptResult, setGptResult] = useState<string>("");
  const [stageResult, setStageResult] = useRecoilState<string[]>(stageResultState);

  async function clickHandlerGPT() {
    console.log("test");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: stageResult.toString() }),
      });

      console.log(response);

      const data = await response.json();
      console.log(data);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setGptResult(data.result);
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }

  const clickHandler = (buttonDesc: string) => {
    setStageResult([...stageResult, buttonDesc]);
    console.log(stageResult);
    if (stageNumber === "10") {
      clickHandlerGPT();
    }
  };

  return (
    <>
      <GlowText size={40} desc={descHeader} />
      <Desc>{desc}</Desc>
      <ButtonBox>
        {!!startButtonDesc ? (
          <StartButton startButtonDesc={startButtonDesc} />
        ) : (
          buttonDesc.map((ele, i) => <FloatButton buttonDesc={ele} key={i} stageNumber={stageNumber} clickHandler={clickHandler} />)
        )}
      </ButtonBox>
    </>
  );
};

const Desc = styled.div`
  margin: 60px 20px 40px;
  font-size: 20px;
  text-align: center;
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
