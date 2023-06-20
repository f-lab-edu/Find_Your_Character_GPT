import { styled } from "styled-components";
interface ProgressBarProps {
  value: number
}
export const ProgressBar = ({ value }: ProgressBarProps) => {
  return <Progress max={100} value={value}></Progress>;
};

const Progress = styled.progress`
  width: 100%;
  height: 30px;
`;
