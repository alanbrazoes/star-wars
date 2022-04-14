import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

export const Div = styled.div`
  border: 4px solid gray;
  margin: 4px;
  padding: 8px;
  width: 20%;

  h2,
  p {
    font-size: 1.2em;
  }
`;
