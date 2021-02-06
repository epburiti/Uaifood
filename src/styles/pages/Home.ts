import styled from 'styled-components';
import BackImage from '../../assets/uaifood/bg.jpg';
export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url(${BackImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  .logo {
    margin-top: 5%;
  }
  .txt-desc {
    color: ${props => props.theme.colors.textHome};
    width: 50%;
    text-align: left;
    margin-top: 10%;
    font-weight: bold;
    font-size: 3rem;
  }
`;
