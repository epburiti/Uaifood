import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  .containerBody {
    display: flex;
  }
`;

export const SearchTop = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: ${props => `0 4px 2px -2px ${props.theme.colors.text}`};
  padding-bottom: 1rem;

  img {
    height: 3rem;
    padding-left: 3rem;
    /* width: 5rem; */
  }
`;
export const ContainerAside = styled.div`
  width: 15%;
  background-color: #ffffff;
  height: 80%;
  margin-left: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* box-shadow: ${props => `1px ${props.theme.colors.text}`}; */
  .content {
    width: 90%;
    margin: 0 auto;

    .card {
      padding-top: 1rem;
      padding-bottom: 1rem;
      h5 {
        font-size: 0.8rem;
        font-weight: 400;
        color: ${props => props.theme.colors.text};
        text-transform: uppercase;
      }
      p {
        font-size: 0.7rem;
        color: ${props => props.theme.colors.txtInput};
      }
      div {
        padding-top: 0.4rem;
      }
      .iten-aside {
        display: flex;
        align-items: center;
      }
      input {
        margin-right: 0.5rem;
        cursor: pointer;
      }
    }
  }
`;
export const ContainerCards = styled.div`
  width: 80%;
  margin: 0 2.5%;

  .cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .card {
      cursor: pointer;
      width: 30%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 2rem;
      .textCard {
        width: 90%;
        margin: 0 auto;
        h1 {
          font-size: 1.5rem;
          color: ${props => props.theme.colors.cardInput};
        }
        p {
          font-size: 1.1rem;
          color: ${props => props.theme.colors.text};
        }
        div {
          padding-bottom: 1rem;
        }
      }

      .btn {
        /* display: flex;
        align-items: center; */
        min-width: 3.4rem !important;
        padding: 0.3rem;
        border: none;
        margin: 0 2% 0 0;
        text-align: center;
        .custom-icon {
          margin-right: 0.1rem;
        }
      }
      .green {
        background: ${props => props.theme.colors.green};
        color: ${props => props.theme.colors.background};
      }
      .grey {
        color: ${props => props.theme.colors.txtInput};
        background: lightgray;
      }
    }

    .card:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
    }
  }

  @media (max-width: 1155px) {
    .card {
      width: 45% !important;
    }
  }
  @media (max-width: 800px) {
    .card {
      width: 90% !important;
    }
  }
`;
