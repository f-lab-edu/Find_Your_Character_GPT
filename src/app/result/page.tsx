"use client";
import React, { useCallback, useRef, useState } from "react";
import { toPng } from 'html-to-image';
import { styled } from "styled-components";
import { GlowText } from "../../components/glowText/GlowText";
import { ImageBox } from "../../components/imageBox/ImageBox";
import { ResultButton } from "../../components/floatButton/ResultButton";
import { ShareModal } from "../../components/shareModal/ShareModal";
import Link from "next/link";

interface ContentFontProp {
  size: number
}
export default function ResultPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleDownload = useCallback(() => {
    toPng(ref.current as HTMLDivElement, { quality: 0.95 })
      .then((dataUrl) => {
        // 이미지 다운로드
        const link = document.createElement('a');
        link.download = 'my-image.png';
        link.href = dataUrl;
        link.click();
      });
  }, []);
  return (
    <>
      <ResultBox ref={ref}>
        <ShareBox>
          <button onClick={() => { setModalOpen(true) }}>공유하기</button>
        </ShareBox>
        <MainImage><ImageBox size={250} name={"gryffindor"} /></MainImage>
        <GlowText
          margin={20}
          desc={"용감하고 재기발랄한 모험가인 당신은"}
          size={28}
        />
        <GlowText desc="'해리포터'" size={40} margin={10} />
        <ContentFont size={17}>
          {`해리는 시리즈 동안 아버지의 영구히 흐트러진 검은 머리와 어머니의 밝은
            녹색 눈, 이마에 번개 모양의 흉터가 있는 것으로 묘사되고 있다. 그는 마른
            얼굴과 혹 모양의 무릎으로 그의 나이에 비해 작고 마른것으로 묘사되며 뿔테
            안경을 쓰고 있다. 첫 번째 책에서 그의 흉터는 해리가 자신의 외모에 대해
            유일하게 좋아했던 것으로 묘사된다. 롤링은 해리의 벼락 같은 흉터 뒤에
            숨겨진 의미를 묻는 질문에 해리가 겪은 일을 신체적으로 보여주고 싶었다고
            말했다. 그것은 그가 안에서 겪어온 것에 대한 겉으로 드러난 표현이었다.
            어떤 의미에서는 선택받은 사람이 되거나 저주받은 사람이 되는 것과
            같습니다. 롤링은 또한 해리가 부모님의 잘생긴 외모를 물려받았다고 말했다.
            시리즈의 후반부에서 해리는 키가 커지며, 일곱 번째 책은 아버지의 키를
            '거의', 다른 캐릭터들에 의해 '키가 크다'라고 한다.`}
        </ContentFont>
        <SimilarContainer>
          <SimilarBox>
            <ContentFont size={25}>어울리는 캐릭터</ContentFont>
            <GlowText
              margin={20}
              desc={"론 위즐리"}
              size={28}
            />
          </SimilarBox>
          <SimilarBox>
            <ContentFont size={25}>안 어울리는 캐릭터</ContentFont>
            <GlowText
              margin={20}
              desc={"볼드모트"}
              size={28}
            />
          </SimilarBox>
        </SimilarContainer>
        <ButtonBox>
          {/* <ResultButton
            clickHandler={() => {
              setModalOpen(true);
            }}
            buttonDesc="공유하기"
          />
          <ResultButton
            clickHandler={handleDownload}
            buttonDesc="다운로드"
          /> */}
          <Link href="/"><ResultButton buttonDesc="다시하기" /></Link>
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
  width: 600px;
  border-radius: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("img/harry.jpeg");
  background-position: center;
  background-size: cover;
  overflow-y:scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const ShareBox = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
width: 100%;
height: 50px;
  button {
  width: 90px;
  height: 30px;
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
    height: 30px;
    font-size: 10px;
  }
  }
`
const MainImage = styled.div`
  margin-bottom: 30px;
`
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
