import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.colors.text};
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.secondary};
    border: 2px solid ${(props) => props.theme.colors.border};
    transition: border 0.2s;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;


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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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
  }
`;

export const ContainerSwitch = styled.div`
  display: flex;
  justify-content: space-between;
`;
