import React from 'react';

class ModIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.props.affix
    this.togglePin = this.togglePin.bind(this);
  }
  
  togglePin(mod) {
    return () => {
      // this.props.pin(mod)
      // this.props.unpin(mod)
    };
  }
  
  render () {
    // Hardcoded stuff for styling
    
    // TODO: Once we have pins fully functional, make the thumbtack conditionally
    // change to an X
    return (
      <div className="mod-index">
        <div className="mod-index__title">{`${this.props.affix}es`}</div>
        <table className="table">
          <tbody>
            <tr>
              <td colSpan="3" className="table__mod-type table__cell">
                +# to max life
                <div className="pin-icon"><i className={`fa fa-thumb-tack`}></i></div>
              </td>
            </tr>
            <tr className="table__mod-stat">
              <td className="table__ilvl table__cell">1</td>
              <td className="table__value table__cell">3 to 9</td>
              <td className="table__name table__cell">Hale</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ModIndex;
