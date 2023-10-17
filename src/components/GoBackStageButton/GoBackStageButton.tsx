import { prevStageResultState, stageNumberState, stageResultState } from "@/app/atoms/atom";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

export default function GoBackStageButton() {
  const setStageNumber = useSetRecoilState<number>(stageNumberState);
  const prevStageResult = useRecoilValue(prevStageResultState);
  const setStageResult = useSetRecoilState(stageResultState);

  const clickHandler = () => {
    setStageNumber((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    });

    setStageResult(prevStageResult);
  };
  return <BackButton onClick={clickHandler}>뒤로가기</BackButton>;
}

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 30px;
  color: #ffffff;
  background-color: #000000;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 8vw;
  height: 3vw;
  font-size: 1.2vw;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;
