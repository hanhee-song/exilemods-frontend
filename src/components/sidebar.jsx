import React from 'react';
import SidebarItem from './sidebar_item';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        Weapons: {
          "One Hand": ["Claw", "Dagger", "Wand", "Mace", "Scepter", "Sword", "Axe"],
          "Two Hand": ["Bow", "Quiver", "Staff", "Mace", "Sword", "Axe"]
        },
        Armor: {
          Chest: ["AR", "ES", "EVA", "AR & ES", "AR & EVA", "ES & EVA"],
          Helm: [],
          Boots: [],
        }
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
      const subCats = Object.keys(cats[cat]).map(subCat => {
        return <SidebarItem
          key={subCat}
          subCat={subCat}
          items={cats[cat][subCat]}
          selectItem={this.handleClick}
          currentItem={this.props.currentItem}/>;
      });
      
      return (
        <div className="sidebar__section" key={cat}>
          <div className="section__title">{cat}</div>
          {subCats}
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
