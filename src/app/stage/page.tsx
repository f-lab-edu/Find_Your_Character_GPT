"use client";
import React from "react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";
import { gptResultState, loadingState, stageNumberState, stageResultState } from "../atoms/atom";
import { useStageNumberMemo } from "../hooks/hooks";
import { ProgressBar } from "@/components/progressBar/ProgressBar";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { Loading } from "@/components/loading/Loading";
import questions from "../../question.json";

type StageResult = {
  [key: string]: number;
};

export default function StagePage() {
  const router = useRouter();
  const setGptResult = useSetRecoilState(gptResultState);
  const stageResult = useRecoilValue<StageResult>(stageResultState);
  const [stageNumber, setStageNumber] = useRecoilState<number>(stageNumberState);
  const [loadingOpen, setLoadingOepn] = useRecoilState<boolean>(loadingState);
  const { question, choices } = stageNumber === 11 ? { question: undefined, choices: undefined } : questions[stageNumber - 1];

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

      let data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      if (typeof data === "string") {
        data = JSON.parse(data);
      }
      setGptResult(data);
      if (response.status === 200) {
        router.push("/result");
        setLoadingOepn(false);
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }

  useStageNumberMemo(stageResult, clickHandlerGPT);

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
