import styled from 'styled-components';
import { propsI } from './index';
export const Container = styled.div<propsI>`
  display: flex;
  justify-content: center;
  align-items: baseline;
  /* flex-wrap: wrap; */
  margin: 2rem;
  width: 100vw;
  .width-input {
    width: ${props => (props.navBar ? '80%' : '40%')};
    input {
      width: 100%;
      color: ${props => props.theme.colors.txtInput};
      font-size: 1.6rem;
      text-align: left;
      padding-left: 3.5rem;
      height: 3rem;
      outline: none;
      border: ${props => '0.1rem solid ' + props.theme.colors.text};
    }
  }

  /* input with icon */
  .input-icons {
    position: relative;
  }
  .icone {
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    position: absolute;
  }

  > .customButton {
    cursor: pointer;
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
    margin-top: 1rem;
  }
`;

export const ContainerItems = styled.div<propsI>`
  width: 100%;

  .content-select {
    background: ${props => props.theme.colors.background};
    > button {
      cursor: pointer;
      width: 100%;
      /* padding: 8px 4px; */
      background: transparent;
      display: flex;
      flex-direction: column;
      /* padding-left: 1rem; */
      outline: none;
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
    /* width: 100%; */
    padding: 8px 4px;
    background: transparent;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
  }
`;
