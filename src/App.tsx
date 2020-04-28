import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import UsePersistedState from './utils/usePersistedState';
import Header from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = UsePersistedState('theme', light);

  const { title } = theme;
  const toggleTheme = (): void => {
    setTheme(title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};
export default App;
