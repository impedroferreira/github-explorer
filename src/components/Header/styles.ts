import styled from 'styled-components';

export const ContainerSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor};

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;
