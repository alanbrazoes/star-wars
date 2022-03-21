import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;

  h3 {
    color: #ffb703;
  }
`;

const LoadingComponent = () => {
  return (
    <LoadingContainer>
      <h3>Loading...</h3>
    </LoadingContainer>
  );
};

export default LoadingComponent;
