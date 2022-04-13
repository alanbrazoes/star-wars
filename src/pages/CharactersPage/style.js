import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardCharacter = styled(motion.section)`
  display: flex;
  flex-direction: column;

  align-items: center;

  min-height: content;
  width: 80%;

  margin: 4px;
  border: 2px solid gray;
  border-radius: 5px;
  padding: 4px;

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    width: 100%;
  }

  @media (max-width: 426px) {
    min-width: 80vh;
  }
`;

export const MainStyle = styled(motion.main)`
  display: flex;
  flex-wrap: wrap;

  max-width: 100%;
  min-width: 70%;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 530px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-content: center;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-content: center;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;

  margin: 8px;
`;
