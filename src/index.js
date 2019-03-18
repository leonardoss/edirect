import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes/index';

import { Provider } from 'react-redux';
import { Store } from './store';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import primaryColor from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles/init.scss';

const ThemeUi = createMuiTheme({
  palette: {
    primary: primaryColor,
  },
});

const App = () => (
  <Provider store={Store}>
    <MuiThemeProvider theme={ThemeUi}>
      <CssBaseline>
        <Router>
          <Routes />
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
