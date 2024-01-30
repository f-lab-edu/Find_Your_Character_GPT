import { Dispatch, useRef } from "react";
import { styled } from "styled-components";

interface ShareModalProps {
  setModalOpen: Dispatch<React.SetStateAction<boolean>>;
  clickHandler: () => void;
}
export const ShareModal: React.FunctionComponent<ShareModalProps> = ({ setModalOpen, clickHandler }) => {
  const modalRef = useRef(null);
  const clickOut = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      setModalOpen(false);
    }
  };
  const baseUrl = "https://find-character-gpt.vercel.app/";
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };
  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        console.log(process.env.KAKAO_API_KEY);
        kakao.init(`${process.env.KAKAO_API_KEY}`);
      }
      window.Kakao.Share.sendCustom({
        templateId: 103767,
      });
    }
  };

  return (
    <>
      <Dim ref={modalRef} onClick={clickOut} />
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <h4>공유하기</h4>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
            >
              X
            </button>
          </ModalHeader>
          <ModalBody>
            <button onClick={shareKakao}>
              <img src="/img/kakao.png" alt="카카오톡공유" />
            </button>
            <button onClick={() => handleCopyClipBoard(`${baseUrl}`)}>
              <img src="/img/link.svg" alt="링크공유" />
            </button>
            <button onClick={clickHandler}>
              <img src="/img/save.svg" alt="이미지저장" />
            </button>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    </>
  );
};
const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 7%;
  max-width: 600px;
  margin: 1.75rem auto;
  transition: transform 0.3s ease-out;
`;
const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  z-index: 100;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1px solid #dee2e6;
  h4 {
    font-size: 1rem;
  }
  button {
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
`;
const ModalBody = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  button {
    width: 60px;
    cursor: pointer;
    img {
      width: 50px;
      border-radius: 50%;
    }
  }
  button:nth-child(3) {
    img {
      width: 50px;
      background-color: #1d46ca;
    }
  }
`;
