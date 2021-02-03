import styled from 'styled-components';
import { propsI } from './index';
export const Container = styled.div<propsI>`
  margin-top: 1rem;
  display: flex;
  width: ${props => (props.navBar ? '80%' : '50%')};

  > button {
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.textHome};
    text-transform: uppercase;
    font-weight: lighter;
    width: 10rem;
    height: 3rem;
    font-size: 1.1rem;
    outline: none;
    margin-left: 1rem;
    border: none;
    padding: 1rem;
  }
  input {
  }
  .width-input {
    width: ${props => (props.navBar ? '44rem' : '38rem')};

    input {
      width: 100%;
      color: ${props => props.theme.colors.txtInput};
      font-size: 1.6rem;
      padding-left: 3rem;

      height: 3rem;
      margin-right: 1rem;
      outline: none;
      border: ${props => `0.1rem solid ${props.theme.colors.text}`};
    }
  }

  /* icon */
  .inputContainer .gps {
    position: absolute;
  }
  .inputContainer {
    width: 100%;
    margin-bottom: 10px;
  }
  .icon {
    padding: 15px;
    text-align: left;
  }
`;

export const ContainerItems = styled.div<propsI>`
  display: flex;
  justify-content: center;

  .content-select {
    background: ${props => props.theme.colors.background};
    width: ${props => (props.navBar ? '44rem' : '38rem')};
    > button {
      cursor: pointer;
      width: 100%;
      padding: 8px 4px;
      background: transparent;
      display: flex;
      flex-direction: column;
      padding-left: 1rem;
    }
  }
  .text {
    font-family: 'Open Sans', sans-serif;
    text-align: left;
    font-weight: 400;
    color: ${props => props.theme.colors.txtInput};
  }

  > button {
    cursor: pointer;
    width: 100%;
    padding: 8px 4px;
    background: transparent;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
  }
`;
