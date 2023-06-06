import Link from "next/link";
import styled from "styled-components";
import { generateText } from "../../app/api/generate";
import { useRouter } from "next/navigation";
import { atom, useRecoilState } from "recoil";

const stageResultState = atom({
  key: "stageResult",
  default: [],
});

export const FloatButton = ({ buttonDesc, stageNumber, setGptResult }) => {
  const router = useRouter();
  const [stageResult, setStageResult] = useRecoilState(stageResultState);

  async function clickHandlerGPT() {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: stageResult.toString() }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      console.log(data.result);
      setGptResult(data.result);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  async function stageTenClickHandler() {
    if (stageNumber === "10") {
      // window.location.href = "/result";
      router.push("/result");
    }
  }

  const clickHandler = () => {
    setStageResult([...stageResult, buttonDesc]);
    console.log(stageResult);
    if (stageNumber === "10") {
      clickHandlerGPT();
      stageTenClickHandler();
    }
  };

  return (
    <Link href={`stage/${Number(stageNumber) + 1}`}>
      <FloatBtn onClick={clickHandler}>{buttonDesc}</FloatBtn>
      {/* disable해주기 useState를 활용하여 loading화면 띄우기 */}
    </Link>
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
