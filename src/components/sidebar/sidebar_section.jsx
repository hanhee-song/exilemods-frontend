import React from 'react';

class SidebarSection extends React.Component {
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
    this.handleClickItem = this.handleClickItem.bind(this);
  }
  
  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }
  
  handleClickItem(item) {
    return () => {
      this.props.receiveCurrentItem(item);
    };
  }
  
  renderDropdown() {
    const dropdownItems = this.props.items.map(item => {
      // TODO: indicate which section is active once we have ID's, rather
      // than strings, to indicate the current item.
      // const active = this.props.currentItem === item ? "active" : "";
      const active = "";
      return (
        <div className={`dropdown__item selectable ${active}`}
          onClick={this.handleClickItem(item)}
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
        { this.renderDropdown() }
      </div>
    );
  }
}

export default SidebarSection;
