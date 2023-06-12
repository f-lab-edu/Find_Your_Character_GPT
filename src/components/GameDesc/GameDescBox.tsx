import { styled } from "styled-components";
import { FloatButton } from "../floatButton/FloatButton";
import { StartButton } from "../floatButton/StartButton";
import { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";

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

  useEffect(() => {
    if (stageNumber === "10") {
      clickHandlerGPT();
    }
  }, [stageNumber]);

  const clickHandlerGPT = async () => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: stageResult.toString() }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      console.log(data.result);
      setGptResult(data.result);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        alert(error.message);
      }
    }
  };

  const clickHandler = (buttonDesc: string) => {
    setStageResult([...stageResult, buttonDesc]);
  };

  return (
    <>
      <DescHeader>{descHeader}</DescHeader>
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

const DescHeader = styled.h2`
  font-size: 30px;
`;
const DescTextBox = styled.div`
  height: 60%;
`;
const Desc = styled.p`
  font-size: 18px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
