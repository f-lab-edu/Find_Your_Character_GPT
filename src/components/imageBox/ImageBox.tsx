import { styled } from "styled-components";

interface PropsType {
  size: number,
  name: string
}
export const ImageBox = ({ size, name }: PropsType) => {
  return (
    <>
      <Container size={size} name={name} />
    </>
  );
};
const Container = styled.div<PropsType>`
  width: ${({ size }) => size + "px"};
  height: ${({ size }) => size + "px"};
  background-image: url(${({ name }) => "img/" + name + ".png"});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  border: 5px solid burlywood;
  @media (max-width: 700px) {
    width: ${({ size }) => size / 6.5 + "vw"};
    height: ${({ size }) => size / 6.5 + "vw"};
  }
`;
