import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  margin: 16px;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.primary};
  color: lightgray;
  padding: 4px;

  &:hover {
    border: 2px solid;
    border-color: ${(props) => props.theme.colors.secundary};
    background-color: ${(props) => props.theme.colors.hover};
    transition: 0.2s;
  }
`;
