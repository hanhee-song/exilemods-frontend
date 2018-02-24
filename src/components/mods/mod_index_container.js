import ModIndex from './mod_index';
import { connect } from 'react-redux';
import { pinMod, unpinMod } from '../../actions/pin_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentItem: state.currentItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pinMod: (mod) => dispatch(pinMod(mod)),
    unpinMod: (mod) => dispatch(unpinMod(mod)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModIndex);
