import ModIndex from './mod_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    currentItem: ownProps.match.params.currentItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ModIndex));
