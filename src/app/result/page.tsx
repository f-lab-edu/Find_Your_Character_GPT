"use client";
import React, { useCallback, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { styled } from "styled-components";
import { GlowText } from "../../components/glowText/GlowText";
import { ImageBox } from "../../components/imageBox/ImageBox";
import { ResultButton } from "../../components/floatButton/ResultButton";
import { ShareModal } from "../../components/shareModal/ShareModal";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { gptResultState } from "@/components/GameDesc/GameDescBox";

interface ContentFontProp {
  size: number;
}
export default function ResultPage() {
  const gptResult = useRecoilValue(gptResultState);
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleDownload = useCallback(() => {
    toPng(ref.current as HTMLDivElement, { quality: 0.95 }).then((dataUrl) => {
      // 이미지 다운로드
      const link = document.createElement("a");
      link.download = "my-image.png";
      link.href = dataUrl;
      link.click();
    });
  }, []);
  return (
    <>
      <ResultBox ref={ref}>
        <ShareBox>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            공유하기
          </button>
        </ShareBox>
        <MainImage>
          <ImageBox size={250} name={"gryffindor"} />
        </MainImage>
        <GlowText margin={20} desc={gptResult.prefix} size={28} />
        <GlowText desc={gptResult.name} size={40} margin={10} />
        <ContentFont size={17}>{gptResult.description}</ContentFont>
        <SimilarContainer>
          <SimilarBox>
            <ContentFont size={25}>어울리는 캐릭터</ContentFont>
            <GlowText margin={20} desc={gptResult.suitable} size={28} />
          </SimilarBox>
          <SimilarBox>
            <ContentFont size={25}>안 어울리는 캐릭터</ContentFont>
            <GlowText margin={20} desc={gptResult.unsuitable} size={28} />
          </SimilarBox>
        </SimilarContainer>
        <ButtonBox>
          <Link href="/">
            <ResultButton buttonDesc="다시하기" />
          </Link>
        </ButtonBox>
      </ResultBox>
      {modalOpen && <ShareModal setModalOpen={setModalOpen} clickHandler={handleDownload} />}
    </>
  );
}

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  max-height: 900px;
  border-radius: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("img/harry.jpeg");
  background-position: center;
  background-size: cover;
  overflow-y: scroll;

  @media (max-width: 375px) {
    border-radius: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
const ShareBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  margin-top: 30px;

  @media (max-width: 375px) {
    margin-top: 0;
    height: 40px;
  }

  button {
    width: 90px;
    height: 30px;
    position: absolute;
    top: 20px;
    margin-right: 20px;
    font-weight: 600;
    font-size: 15px;
    color: #fff;
    border-radius: 5px;
    transition: all 0.2s;
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:hover {
      margin-left: 0px;
      transform: scale(1.1, 1.1);
      -ms-transform: scale(1.1, 1.1);
      -webkit-transform: scale(1.1, 1.1);
      will-change: transform;
      box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 700px) {
      width: 70px;
      height: 30px;
      font-size: 10px;
    }

    @media (max-width: 375px) {
      top: 20px;
      width: 50px;
      height: 30px;
      font-size: 10px;
    }
  }
`;
const MainImage = styled.div`
  margin-bottom: 30px;
`;
const SimilarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const SimilarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
const ContentFont = styled.p<ContentFontProp>`
  margin: 20px 30px;
  color: white;
  font-size: ${({ size }) => size + "px"};
  line-height: 1.8;

  @media (max-width: 700px) {
    font-size: ${({ size }) => size / 6.5 + "vw"};
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
`;
