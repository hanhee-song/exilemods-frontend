import React from 'react';
import SidebarItemContainer from './sidebar_item_container';

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
          Helm: ["AR", "ES", "EVA", "AR & ES", "AR & EVA", "ES & EVA"],
          Boots: ["AR", "ES", "EVA", "AR & ES", "AR & EVA", "ES & EVA"],
        }
      }
    };
  }
  
  render () {
    // "section" is a broad category (weapons, armor)
    // subCats is a subsection (helm, boots)
    // items are the specific types (AR, ES)
    const cats = this.state.categories;
    const renderedCats = Object.keys(cats).map(cat => {
      const subCats = Object.keys(cats[cat]).map(subCat => {
        return <SidebarItemContainer
          key={subCat}
          subCat={subCat}
          items={cats[cat][subCat]} />;
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
