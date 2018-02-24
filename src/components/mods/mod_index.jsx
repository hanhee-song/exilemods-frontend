import React from 'react';

class ModIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    // Hardcoded stuff for styling
    return (
      <div className="mod-index">
        <div className="mod-index__name">Mod Index {this.props.currentItem}</div>
        
      </div>
    );
  }
}

export default ModIndex;
