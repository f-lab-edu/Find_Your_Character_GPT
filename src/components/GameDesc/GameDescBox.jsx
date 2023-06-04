import { styled } from "styled-components";
import { FloatButton } from "../floatButton/FloatButton";
import { StartButton } from "../floatButton/StartButton";
import { useState } from "react";

export const GameDescBox = ({ descHeader, desc, startButtonDesc, buttonDesc, stageNumber }) => {
  const [gptResult, setGptResult] = useState("");

  return (
    <>
      <DescHeader>{descHeader}</DescHeader>
      <Desc>{desc}</Desc>
      <ButtonBox>
        {!!startButtonDesc ? (
          <StartButton startButtonDesc={startButtonDesc} />
        ) : buttonDesc && buttonDesc.length > 0 ? ( // buttonDesc가 존재하고 배열이 비어있지 않을 경우에만 순회
          buttonDesc.map((ele, i) => <FloatButton buttonDesc={buttonDesc[i]} key={i} stageNumber={stageNumber} setGptResult={setGptResult} />)
        ) : null}
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
