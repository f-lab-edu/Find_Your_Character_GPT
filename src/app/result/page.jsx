"use client";
import React from "react";
import { styled } from "styled-components";
import { GlowFont } from "../../components/glowFont/GlowFont";
import { ContentFont } from "../../components/contentFont/ContentFont";
import { ImageBox } from "../../components/imageBox/ImageBox";
import { FloatButton } from "../../components/floatButton/FloatButton";

export default function ResultPage() {
  return (
    <>
      <ResultContainer>
        <ResultBox>
          <ImageBox size={"300"} name={"potter"} />
          <GlowFont
            margin={"20"}
            desc={"용감하고 재기발랄한 모험가인 당신은"}
            size={"30"}
          />
          <GlowFont desc={"'해리포터'"} size={"30"} />
          <ContentFont
            margin={"30"}
            desc={
              "해리는 시리즈 동안 아버지의 영구히 흐트러진 검은 머리와 어머니의 밝은 녹색 눈, 이마에 번개 모양의 흉터가 있는 것으로 묘사되고 있다. 그는 마른 얼굴과 혹 모양의 무릎으로 그의 나이에 비해 작고 마른것으로 묘사되며 뿔테 안경을 쓰고 있다. 첫 번째 책에서 그의 흉터는 해리가 자신의 외모에 대해 유일하게 좋아했던 것으로 묘사된다. 롤링은 해리의 벼락 같은 흉터 뒤에 숨겨진 의미를 묻는 질문에 해리가 겪은 일을 신체적으로 보여주고 싶었다고 말했다. 그것은 그가 안에서 겪어온 것에 대한 겉으로 드러난 표현이었다. 어떤 의미에서는 선택받은 사람이 되거나 저주받은 사람이 되는 것과 같습니다. 롤링은 또한 해리가 부모님의 잘생긴 외모를 물려받았다고 말했다. 시리즈의 후반부에서 해리는 키가 커지며, 일곱 번째 책은 아버지의 키를 '거의', 다른 캐릭터들에 의해 '키가 크다'라고 한다."
            }
          />
          <SimilarContainer>
            <SimilarBox>
              <ContentFont margin={"30"} size={"15"} desc={"어울리는 캐릭터"} />
              <ImageBox size={"150"} name={"ron"} />
            </SimilarBox>
            <SimilarBox>
              <ContentFont
                margin={"30"}
                size={"15"}
                desc={"안어울리는 캐릭터"}
              />
              <ImageBox size={"150"} name={"hermione"} />
            </SimilarBox>
          </SimilarContainer>
          <ButtonBox>
            <FloatButton buttonDesc={"공유하기"} />
            <FloatButton buttonDesc={"다시하기"} />
          </ButtonBox>
        </ResultBox>
      </ResultContainer>
    </>
  );
}

const ResultContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  background-color: #767676;
`;

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
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 55%;
  margin-top: 50px;
`;
