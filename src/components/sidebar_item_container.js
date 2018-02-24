import SidebarItem from './sidebar_item';
import { connect } from 'react-redux';
import { receiveCurrentItem } from '../actions/item_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentItem: (item) => dispatch(receiveCurrentItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarItem);
