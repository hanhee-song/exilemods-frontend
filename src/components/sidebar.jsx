import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        Weapons: ["Daggers", "Claws", "Wands", "Scepters", "1H Swords", "1H Axes", "1H Maces"],
        Armor: ["Chests", "Helms"]
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(item) {
    return () => {
      this.props.history.push(`/${item}`);
    };
  }
  
  render () {
    const cats = this.state.categories;
    const renderedCats = Object.keys(cats).map(cat => {
      const catItems = cats[cat].map(item => {
        const active = this.props.currentItem === item ? "active" : "";
        return (
          <div className={`section__item ${active}`}
            key={item}
            onClick={this.handleClick(item)}>
            {item}
          </div>
        );
      });
      
      return (
        <div className="sidebar__section" key={cat}>
          <div className="section__title">{cat}</div>
          {catItems}
        </div>
      );
    });
    
    return (
      <div className="sidebar">
        {renderedCats}
      </div>
    );
  }
}

export default Sidebar;
