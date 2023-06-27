import { styled } from "styled-components";
interface ProgressBarProps {
  value: number
}
export const ProgressBar = ({ value }: ProgressBarProps) => {
  return <Progress max={100} value={value}></Progress>;
};

const Progress = styled.progress`
  width: 80%;
  height: 30px;
  margin: 30px 0;
  @media (max-width: 700px) {
    height: 20px;
  }
`;
