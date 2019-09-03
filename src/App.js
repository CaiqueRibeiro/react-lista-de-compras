import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './common/Header'
import Home from './home'
import CreateList from './createList'
import store from './store'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {  
      main: '#e91e63',
    },
    secondary: {
      main: '#00b0ff',
    },
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div>
            <Router>
              <Header />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/lista" component ={CreateList}/>
              </Switch>
            </Router>
          </div>
        </MuiThemeProvider>      
      </Provider>
    );
  }
}

export default App;
