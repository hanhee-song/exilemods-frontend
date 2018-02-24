import React from 'react';

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    // this.props = {
    //   subCat: String,
    //   items: Array,
    // };
    this.state = {
      showDropdown: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.renderDropdown = this.renderDropdown.bind(this);
  }
  
  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }
  
  renderDropdown() {
    const dropdownItems = this.props.items.map(item => {
      const active = this.props.currentItem === item ? "active" : "";
      return (
        <div className={`dropdown__item selectable ${active}`}
          onClick={this.props.selectItem(item)}
          key={item} >
          {item}
        </div>
      );
    });
    return (
      <div className={`section__dropdown ${this.state.showDropdown && "show"}`}>
        {dropdownItems}
      </div>
    );
  }
  
  render () {
    return (
      <div className="section__item">
        <div className="section__item-title selectable" onClick={this.toggleDropdown}>
          {this.props.subCat}
        </div>
        {
          this.renderDropdown()
        }
      </div>
    );
  }
}

export default SidebarItem;
