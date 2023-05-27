import Link from "next/link";
import styled from "styled-components";
import { generateText } from "../../app/api/generate";
import { stageResult } from "../../../constant/constants";

export const FloatButton = ({ buttonDesc, stageNumber }) => {
  async function clickHander() {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: buttonDesc }),
      });
      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      stageResult.push(buttonDesc);
      console.log(stageResult);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <Link href={`stage/${Number(stageNumber) + 1}`}>
      <FloatBtn onClick={clickHander}>{buttonDesc}</FloatBtn>
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
