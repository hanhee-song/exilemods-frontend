import React from 'react';

class SidebarSection extends React.Component {
  constructor(props) {
    super(props);
    // this.props = {
    //   subCat: String,
    //   items: Objects,
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
      const tagIds = this.props.items[item];
      this.props.receiveCurrentItem({
        category: this.props.subCat,
        item,
        tagIds,
      });
    };
  }
  
  renderDropdown() {
    const dropdownItems = Object.keys(this.props.items).map(item => {
      return (
        <div className={`dropdown__item selectable`}
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
