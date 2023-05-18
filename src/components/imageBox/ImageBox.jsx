import { styled } from "styled-components";

export const ImageBox = ({ size, name }) => {
  return (
    <>
      <Container size={size} name={name} />
    </>
  );
};
const Container = styled.div`
  width: ${({ size }) => size + "px"};
  height: ${({ size }) => size + "px"};
  margin-bottom: 10px;
  background-image: url(${({ name }) => "img/" + name + ".png"});
  background-size: cover;
  border-radius: 10px;
  border: 5px solid burlywood;
`;
