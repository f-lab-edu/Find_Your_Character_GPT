import { stageNumberState, stageResultState } from "@/app/atoms/atom";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

export default function GoBackStageButton() {
  const setStageNumber = useSetRecoilState<number>(stageNumberState);
  const setStageResult = useSetRecoilState(stageResultState);

  const clickHandler = () => {
    setStageNumber((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    });

    setStageResult((prevResults) => {
      if (prevResults.length > 1) {
        const newResults = prevResults.slice(0, -1);
        return newResults;
      }
      return prevResults;
    });
  };
  return <BackButton onClick={clickHandler}>뒤로가기</BackButton>;
}

const BackButton = styled.button`
  position: absolute;
  top: 3vh;
  left: 2vw;
  color: #ffffff;
  background-color: #000000;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 6vw;
  height: 3vh;
  font-size: 1vw;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
  @media (max-width: 980px) {
    width: 9vw;
    height: 3vh;
    font-size: 1.6vw;
  }
  @media (max-width: 780px) {
    width: 9vw;
    height: 4vh;
    font-size: 1.8vw;
  }
  @media (max-width: 580px) {
    width: 13vw;
    height: 2.5vh;
    font-size: 1.6vw;
  }
  @media (max-width: 480px) {
    width: 10vw;
    height: 2vh;
    font-size: 1.5vw;
  }
  @media (max-width: 380px) {
    width: 15vw;
    height: 2vh;
    font-size: 1.5vw;
  }
`;
