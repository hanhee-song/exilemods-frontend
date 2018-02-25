import React from 'react';
import SidebarSectionContainer from './sidebar_section_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        Weapons: {
          "One Hand": {
            "Claw": [25, 26, 27],
            "Dagger": [29, 30, 31],
            "Wand": [108, 109, 110],
            "Mace": [53, 54, 55],
            "Scepter": [79, 80, 81],
            "Sword": [98, 99, 100],
            "Axe": [9, 10, 11],
          },
          "Two Hand": {
            "Bow": [],
            "Quiver": [],
            "Staff": [88, 89, 90],
            "Mace": [],
            "Sword": [],
            "Axe": [],
          }
        },
        // Armor: {
        //   Chest: ["AR", "ES", "EVA", "AR & ES", "AR & EVA", "ES & EVA"],
        //   Helm: ["AR", "ES", "EVA", "AR & ES", "AR & EVA", "ES & EVA"],
        //   Boots: ["AR", "ES", "EVA", "AR & ES", "AR & EVA", "ES & EVA"],
        // }
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
        return <SidebarSectionContainer
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
