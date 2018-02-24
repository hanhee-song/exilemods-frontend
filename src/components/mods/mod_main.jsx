import React from 'react';
import ModIndexContainer from './mod_index_container';

class ModMain extends React.Component {
  render () {
    return (
      <div className="mod-main">
        <div className="mod-main__name">Mod Main {this.props.currentItem}</div>
        <ModIndexContainer />
      </div>
    );
  }
}

export default ModMain;
