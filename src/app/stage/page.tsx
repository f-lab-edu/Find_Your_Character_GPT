"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";
import { gptResultState, loadingState, stageNumberState, stageResultState } from "../atoms/atom";
// import { stageNumberMemo, useStageNumberMemo } from "../hooks/hooks";
import { ProgressBar } from "@/components/progressBar/ProgressBar";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { Loading } from "@/components/loading/Loading";
import questions from "../../question.json";
import useStageNumber, { useGPTHandler } from "../hooks/hooks";

type StageResult = {
  [key: string]: number;
};

export default function StagePage() {
  const router = useRouter();
  const setGptResult = useSetRecoilState(gptResultState);
  const stageResult = useRecoilValue<StageResult>(stageResultState);
  const [stageNumber, setStageNumber] = useRecoilState<number>(stageNumberState);
  const [loadingOpen, setLoadingOpen] = useRecoilState<boolean>(loadingState);
  const [gptCall, setGptCall] = useState<boolean>(false);
  const { question, choices } = stageNumber === 11 ? { question: undefined, choices: undefined } : questions[stageNumber - 1];
  const { stageResultMemo } = useStageNumber();
  const { HandlerGPT } = useGPTHandler();

  useEffect(() => {
    if (stageNumber > 10 && !gptCall) {
      setGptCall(true);
      HandlerGPT(stageResult);
    }
  }, [stageResultMemo, stageResult, HandlerGPT, gptCall]);

  return (
    <>
      <DescWrapper>
        <ProgressBar value={Number(stageNumber) * 10} />
        <GameDescBox descHeader={`Stage${stageNumber}`} desc={question} startButtonDesc={""} buttonDesc={choices} />
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
