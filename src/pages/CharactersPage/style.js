import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
 0% { 100px; opacity: 0;}
 100% { opacity: 1; }
`;

export const CardCharacter = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  min-height: content;
  width: 90%;

  margin: 4px;
  border: 4px solid gray;
  padding: 4px;

  animation-name: ${breatheAnimation};
  animation-duration: 0.4s;

  @media (max-width: 426px) {
    min-width: 80vh;
  }
`;

export const MainStyle = styled.main`
  display: flex;
  flex-wrap: wrap;

  max-width: 100%;
  min-width: 100%;
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 530px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  color: white;

  cursor: pointer;

  flex-grow: 1;
  width: 80%;
  height: 20%;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.primary};
  padding: 2px;
  margin: 4px;

  &:hover {
    border: 2px solid;
    border-color: ${(props) => props.theme.colors.secundary};
    background-color: ${(props) => props.theme.colors.hover};
    transition: 0.2s;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;

  margin: 8px;
`;
