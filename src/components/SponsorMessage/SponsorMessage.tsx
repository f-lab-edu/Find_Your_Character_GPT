import React from "react";
import { styled } from "styled-components";
import Image from "next/image";

export const SponsorMessage = () => {
  return (
    <SponsorText>
      이 서비스는{" "}
      <a href="https://f-lab.kr/" target="_blank">
        <Image src="/img/logo.svg" alt="F-LAB logo" width={30} height={20} />
        F-Lab
      </a>
      의 후원을 받아 개발되었습니다.
    </SponsorText>
  );
};

const SponsorText = styled.div`
  position: absolute;
  bottom: 10px;
  font-size: 14px;
  text-align: center;
  white-space: pre;
  line-height: 1.5;
  color: #ffffff;
  @media (max-width: 800px) {
    font-size: 3vw;
  }
  p {
    font-size: 25px;
    @media (max-width: 800px) {
      font-size: 3vw;
    }
  }
  a {
    color: #0072f6;
  }
`;
