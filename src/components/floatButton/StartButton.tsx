import Link from "next/link";
import styled from "styled-components";

interface StartButtonProps {
  startButtonDesc: string;
}

export const StartButton = ({ startButtonDesc }: StartButtonProps) => {
  return (
    <Link href="/stage/">
      <StartBtn>{startButtonDesc}</StartBtn>
    </Link>
  );
};

const StartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 40px;
  font-weight: 600;
  font-size: 24px;
  color: #fff;
  border: none;
  border-radius: 15px;
  transition: all 0.2s;
  background: #505a8b;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    margin-left: 0px;
    transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 700px) {
    height: 30px;
    padding: 25px;
    font-size: 16px;
  }
`;
