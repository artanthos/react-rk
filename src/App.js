import { AuthProvider } from 'Contexts/AuthContext';
import localizations from 'Localizations';
import { store } from 'Redux/store';
import AppRoutes from 'Routes';
import GlobalStyle from 'Styles/GlobalStyles';
import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { BroadcastLogoutAllTabs } from 'Config/auth';

const App = () => {
  useEffect(() => {
    BroadcastLogoutAllTabs();
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <GlobalStyle />
        <IntlProvider
          locale='en'
          messages={localizations.en}
        >
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </IntlProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
