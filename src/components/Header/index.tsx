import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';
import { ContainerSwitch } from './styles';
import logoImg from '../../assets/logo.svg';
import logoDark from '../../assets/logo-dark.svg';

interface Props {
  toggleTheme(): void;
}

interface RepositoryParams {
  repository: string;
}
const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { isExact } = useRouteMatch<RepositoryParams>();

  const { colors, title } = useContext(ThemeContext);
  return (
    <>
      <ContainerSwitch>
        <img
          src={title === 'dark' ? logoDark : logoImg}
          alt="Github Explorer"
        />

        {isExact ? (
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.secondary)}
            onColor={colors.secondary}
          />
        ) : (
          <div>
            <Link to="/">
              <FiChevronLeft size={16} />
              Voltar
            </Link>
          </div>
        )}
      </ContainerSwitch>
    </>
  );
};

export default Header;
