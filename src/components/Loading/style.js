import styled, { keyframes } from 'styled-components';

const Rotate = keyframes`
  0% {transform: scale(1) rotate(360deg)}
  50% {transform: scale(1) rotate(-360deg)}
  100% {transform: scale(1) rotate(360deg)}
`;

const LoadingContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .outSide {
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    border: 8px solid black;
    border-top-color: ${(props) => props.theme.colors.primary};
    border-bottom-color: ${(props) => props.theme.colors.secundary};
    border-radius: 50%;
    animation: ${Rotate} 4s linear infinite;

    .inSide {
      animation: ${Rotate} 2.5s linear infinite;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border: 8px solid black;
      border-top-color: ${(props) => props.theme.colors.primary};
      border-bottom-color: ${(props) => props.theme.colors.secundary};
      border-radius: 50%;
    }
  }
`;

export default LoadingContainer;
