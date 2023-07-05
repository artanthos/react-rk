import React, {useEffect} from 'react';
import {AuthProvider} from 'src/Contexts/AuthContext';
import localizations from 'src/Localizations';
import {store} from 'src/Redux/store';
import AppRoutes from 'src/Routes';
import GlobalStyle from 'src/Styles/GlobalStyles';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {BroadcastLogoutAllTabs} from 'src/Config/auth';

const App = () => {
  useEffect(() => {
    BroadcastLogoutAllTabs();
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <GlobalStyle/>
        <IntlProvider
          locale='en'
          messages={localizations.en}
        >
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>
        </IntlProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
