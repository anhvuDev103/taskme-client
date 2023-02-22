import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from 'assets/styles/global.styled';
import THEMES, { generalTheme } from 'assets/styles/themes.styled';

import DefaultLayout from 'layouts/DefaultLayout';
import ROUTES from 'datafeeds/routes';

import ModalsProvider from 'contexts/Modals';

function App() {
  const [theme, setTheme] = useState<string>('light');
  const appTheme = { ...THEMES[theme as keyof typeof THEMES], ...generalTheme };
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <ModalsProvider>
          <BrowserRouter>
            <DefaultLayout>
              <Routes>
                {ROUTES.map((route) => {
                  const Page = route.component;
                  return <Route key={route.name} path={route.path} element={<Page />} />;
                })}
              </Routes>
            </DefaultLayout>
          </BrowserRouter>
        </ModalsProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
