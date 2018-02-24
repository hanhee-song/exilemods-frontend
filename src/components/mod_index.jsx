import React from 'react';
import PropTypes from 'prop-types';

class ModIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    // Hardcoded stuff for styling
    return (
      <div className="mod-index">
        <div className="mod-index__name">{this.props.currentItem}</div>
        
      </div>
    );
  }
}

export default ModIndex;
