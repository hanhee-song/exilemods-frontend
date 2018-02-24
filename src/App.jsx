import React from 'react';
import { Provider } from 'react-redux';

import SidebarContainer from './components/sidebar/sidebar_container';
import ModIndexContainer from './components/mods/mod_index_container';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <div className="title">
          ExileMods.com | Path of Exile Item Affixes
        </div>
        <SidebarContainer />
        <ModIndexContainer />
      </div>
    );
  }
}

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
