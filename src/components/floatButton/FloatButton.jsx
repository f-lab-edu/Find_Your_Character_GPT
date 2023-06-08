import styled from "styled-components";
import { generateText } from "../../app/api/generate";
import { atom, useRecoilState } from "recoil";
import Link from "next/link";

const stageResultState = atom({
  key: "stageResult",
  default: [],
});

export const FloatButton = ({ buttonDesc, stageNumber, clickHandlerGPT }) => {
  const [stageResult, setStageResult] = useRecoilState(stageResultState);

  const clickHandler = () => {
    setStageResult([...stageResult, buttonDesc]);
    console.log(stageResult);
    if (stageNumber === "10") {
      clickHandlerGPT();
    }
  };

  return (
    <Link href={stageNumber !== "10" ? `stage/${Number(stageNumber) + 1}` : `/result`}>
      <FloatBtn onClick={clickHandler}>{buttonDesc}</FloatBtn>
    </Link>
    // {/* disable해주기 useState를 활용하여 loading화면 띄우기 */}
  );
};

const FloatBtn = styled.button`
  width: 130px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: all 0.2s;
  background: #25809f;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  margin-top: 1em;

  &:hover {
    margin-left: 0px;
    transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    will-change: transform;
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
`;
