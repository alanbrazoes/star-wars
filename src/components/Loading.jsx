import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  heigth: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const LoadingComponent = () => {
  return (
    <LoadingContainer>
      <h3>Loading...</h3>
    </LoadingContainer>
  );
};

export default LoadingComponent;
