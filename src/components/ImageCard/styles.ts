import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  overflow: hidden;
  height: 15rem;
  img {
    width: 100%;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.3);
  }
`;
