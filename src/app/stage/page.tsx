"use client";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { loadingState, stageNumberState, stageResultState } from "../atoms/atom";
import { ProgressBar } from "@/components/progressBar/ProgressBar";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { Loading } from "@/components/loading/Loading";
import questions from "../../question.json";
import { useGPTHandler } from "../hooks/hooks";

type StageResult = {
  [key: string]: number;
};

export default function StagePage() {
  const [stageResult, setStageResult] = useRecoilState<StageResult>(stageResultState);
  const stageNumber = useRecoilValue<number>(stageNumberState);
  const setStageNumber = useSetRecoilState<number>(stageNumberState);
  const loadingOpen = useRecoilValue<boolean>(loadingState);
  const { question, choices } = stageNumber === 11 ? { question: undefined, choices: undefined } : questions[stageNumber - 1];
  const { gptRequestHandler } = useGPTHandler();

  const clickHandler = (buttonState: string) => {
    setStageNumber((prev) => prev + 1);

    const updatedResult = { ...stageResult };
    if (!updatedResult[buttonState]) {
      updatedResult[buttonState] = 0;
    }
    updatedResult[buttonState] += 1;

    const stageResultSum = Object.values(updatedResult).reduce((acc, cur) => acc + cur, 0);
    if (stageResultSum === 10) {
      gptRequestHandler(updatedResult);
    }

    setStageResult(updatedResult);
  };

  return (
    <>
      <DescWrapper>
        <ProgressBar value={Number(stageNumber) * 10} />
        <GameDescBox descHeader={`Stage${stageNumber}`} desc={question} startButtonDesc={""} buttonDesc={choices} clickHandler={clickHandler} />
      </DescWrapper>
      {loadingOpen && <Loading />}
    </>
  );
}

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 800px;
  border: 3px solid #8c95be;
  border-radius: 20px;
  background-color: #000000aa;

  @media (max-width: 700px) {
    width: 80%;
    height: auto;
    padding: 10% 0px;
  }
`;
