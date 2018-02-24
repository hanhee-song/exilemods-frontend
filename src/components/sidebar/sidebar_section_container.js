import SidebarSection from './sidebar_section';
import { connect } from 'react-redux';
import { receiveCurrentItem } from '../../actions/item_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    // currentItem: state.currentItem
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
)(SidebarSection);
