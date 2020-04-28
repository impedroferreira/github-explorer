import styled from 'styled-components';

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: ${(props) => props.theme.colors.text};
      }

      p {
        font-size: 18px;
        color: ${(props) => props.theme.colors.p};
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: ${(props) => props.theme.colors.textColor};
      }

      span {
        display: block;
        margin-top: 4px;
        color: ${(props) => props.theme.colors.p};
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;


    a {
      background: #fff;
      border-radius: 5px;
      width: 100%;
      display: block;
      text-decoration: none;
      padding: 24px;

      display: flex;
      align-items: center;
      transition: transform 0.2s;
      background-color: ${(props) => props.theme.colors.secondary};

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin:0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color ${(props) => props.theme.colors.text};
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }`;
