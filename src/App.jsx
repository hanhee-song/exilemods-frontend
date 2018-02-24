import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import SidebarContainer from './components/sidebar_container';
import ModIndexContainer from './components/mod_index_container';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <div className="title">
          ExileMods.com | Path of Exile Item Affixes
        </div>
        <Route component={SidebarContainer} path="/:currentItem?" />
        <Route component={ModIndexContainer} path="/:currentItem?" />
      </div>
    );
  }
}

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
};

export default Root;
