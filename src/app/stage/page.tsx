"use client";
import React from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { ProgressBar } from "@/components/progressBar/ProgressBar";
import { GameDescBox } from "@/components/GameDesc/GameDescBox";
import { styled } from "styled-components";
import questions from "../../question.json";
import { stageNumberState } from "../../components/GameDesc/GameDescBox";

export default function StagePage() {
  const stageNumber = useRecoilValue<number>(stageNumberState);
  const { question, choices } = stageNumber === 11 ? { question: undefined, choices: undefined } : questions[stageNumber - 1];

  return (
    <DescWrapper>
      <ProgressBar value={Number(stageNumber) * 10} />
      <GameDescBox descHeader={`stage${stageNumber}`} desc={question} startButtonDesc={""} buttonDesc={choices} />
    </DescWrapper>
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
