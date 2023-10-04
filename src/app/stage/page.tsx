"use client";
import React from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { loadingState, stageNumberState, stageResultState } from "../atoms/atom";
import { ProgressBar } from "@/components/progressBar/ProgressBar";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { Loading } from "@/components/loading/Loading";
import GoBackStageButton from "@/components/GoBackStageButton/GoBackStageButton";
import questions from "../../question.json";
import { useGPTHandler } from "../hooks/hooks";

export default function StagePage() {
  const stageNumber = useRecoilValue<number>(stageNumberState);
  const loadingOpen = useRecoilValue<boolean>(loadingState);
  const { question, choices } = stageNumber === 11 ? { question: undefined, choices: undefined } : questions[stageNumber - 1];
  const { gptRequestHandler } = useGPTHandler();

  const clickHandler = useRecoilCallback(({ snapshot, set }) => (buttonState: string) => {
    set(stageNumberState, (prev) => {
      if (prev === 10) {
        return 10;
      }
      return prev + 1;
    });

    // atom의 stageResultState의 값을 가져온다. = 현재 stateResult의 값
    const currentStageResult = snapshot.getLoadable(stageResultState).getValue();
    const updatedResult = { ...currentStageResult };

    if (!updatedResult[buttonState]) {
      updatedResult[buttonState] = 0;
    }
    updatedResult[buttonState] += 1;

    const stageResultSum = Object.values(updatedResult).reduce((acc, cur) => acc + cur, 0);

    if (stageResultSum === 10) {
      gptRequestHandler(updatedResult);
    } else {
      // stageResultSum이 10이 아닐경우는 새로운 stageResult값을 업데이트한다.
      set(stageResultState, updatedResult);
    }
  });

  return (
    <>
      <DescWrapper>
        {stageNumber > 1 ? <GoBackStageButton /> : null}
        <ProgressBar value={Number(stageNumber) * 10} />
        <GameDescBox descHeader={`Stage${stageNumber}`} desc={question} startButtonDesc={""} buttonDesc={choices} clickHandler={clickHandler} />
      </DescWrapper>
      {loadingOpen && <Loading />}
    </>
  );
}

const DescWrapper = styled.div`
  position: relative;
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
