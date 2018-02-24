import React from 'react';
import ModIndexContainer from './mod_index_container';

class ModMain extends React.Component {
  render () {
    
    // TODO: ModMain will be in charge of filtering and passing down the mods
    // to the index containers
    
    return (
      <div className="mod-main">
        <div className="mod-main__name">
          Mod Main {this.props.currentItem}
        </div>
        
        {
          this.props.pins.length > 0 &&
          <div className="mod-main__pins">
            <ModIndexContainer affix={"Prefix"} />
            <ModIndexContainer affix={"Suffix"} />
          </div>
        }
        
        <ModIndexContainer affix={"Prefix"} />
        <ModIndexContainer affix={"Suffix"} />
      </div>
    );
  }
}

export default ModMain;
