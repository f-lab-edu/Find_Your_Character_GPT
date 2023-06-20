"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import { GlowText } from "../../components/glowText/GlowText";
import { ImageBox } from "../../components/imageBox/ImageBox";
import { ResultButton } from "../../components/floatButton/ResultButton";
import { ShareModal } from "../../components/shareModal/ShareModal";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <ResultBox>
      <ImageBox size={"300"} name={"potter"} />
      <GlowText
        margin={20}
        desc={"용감하고 재기발랄한 모험가인 당신은"}
        size={30}
      />
      <GlowText desc={"'해리포터'"} size={30} />
      <ContentFont>
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
          <ContentFont>어울리는 캐릭터</ContentFont>
          <ImageBox size={"150"} name={"ron"} />
        </SimilarBox>
        <SimilarBox>
          <ContentFont>안 어울리는 캐릭터</ContentFont>
          <ImageBox size={"150"} name={"hermione"} />
        </SimilarBox>
      </SimilarContainer>
      <ButtonBox>
        <ResultButton
          clickHandler={() => {
            setModalOpen(true);
          }}
          buttonDesc="공유하기"
        />
        <ResultButton buttonDesc="다시하기" clickHandler={() => {
          router.push(`/`);
        }} />
      </ButtonBox>
      {modalOpen && <ShareModal setModalOpen={setModalOpen} />}
    </ResultBox>
  );
}

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 50px;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("img/harry.jpeg");
  background-position: center;
  background-size: cover;
`;

const SimilarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;
const SimilarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentFont = styled.p`
  margin: 30px 0;
  color: white;
  font-size: 15px;
  line-height: 1.8;

  @media (max-width: 800px) {
    font-size: 15 / 6 + "vw";
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 55%;
  margin-top: 50px;
`;
