import React from 'react';

class ModIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    // Hardcoded stuff for styling
    return (
      <div className="mod-index">
        <div className="mod-index__title">Prefixes</div>
        <table className="table">
          <tbody>
            <tr>
              <td colSpan="3" className="table__mod-type table__cell">+# to max life</td>
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
