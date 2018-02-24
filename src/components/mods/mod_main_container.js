import ModMain from './mod_main';
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
)(ModMain);
