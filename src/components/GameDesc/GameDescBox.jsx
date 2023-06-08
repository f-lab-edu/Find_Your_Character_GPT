import { styled } from "styled-components";
import { FloatButton } from "../floatButton/FloatButton";
import { StartButton } from "../floatButton/StartButton";
import { useState } from "react";

export const GameDescBox = ({ descHeader, desc, startButtonDesc, buttonDesc, stageNumber }) => {
  const [gptResult, setGptResult] = useState("");

  async function clickHandlerGPT() {
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
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <>
      <DescHeader>{descHeader}</DescHeader>
      <Desc>{desc}</Desc>
      <ButtonBox>
        {!!startButtonDesc ? (
          <StartButton startButtonDesc={startButtonDesc} />
        ) : (
          buttonDesc.map((ele, i) => <FloatButton buttonDesc={buttonDesc[i]} key={i} stageNumber={stageNumber} clickHandlerGPT={clickHandlerGPT} />)
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
