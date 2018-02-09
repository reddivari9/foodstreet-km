import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_FR';
import moment from 'moment';
import Main from "./components/Index"

moment.locale('fr');


class App extends Component {

  render() {
    return (
      <LocaleProvider locale={frFR}>
        <Main />
      </LocaleProvider>
    );
  }
}

export default App;
