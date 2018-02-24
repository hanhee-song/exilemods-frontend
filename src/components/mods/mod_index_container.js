import ModIndex from './mod_index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    currentItem: state.currentItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModIndex);
