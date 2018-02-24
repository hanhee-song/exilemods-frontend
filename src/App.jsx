import React from 'react';
import PropTypes from 'prop-types';
import SidebarContainer from './components/sidebar_container';
import ModIndexContainer from './components/mod_index_container';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <div className="title">
          ExileMods.com | Path of Exile Item Affixes
          <SidebarContainer />
          <ModIndexContainer />
        </div>
      </div>
    );
  }
}

export default App;
