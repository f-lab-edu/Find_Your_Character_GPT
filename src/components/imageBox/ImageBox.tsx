import { styled } from "styled-components";

interface PropsType {
  size: string,
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
  margin-bottom: 10px;
  background-image: url(${({ name }) => "img/" + name + ".png"});
  background-size: cover;
  border-radius: 10px;
  border: 5px solid burlywood;
`;
