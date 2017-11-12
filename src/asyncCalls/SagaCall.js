import { connect } from 'react-redux';
import { statusSelector, toggleCall } from '../modules/UpsideDown';
import ButtonWithStatus from './ButtonWithStatus';

const mapStateToProps = state => ({
  strangerStatus: statusSelector(state),
  buttonText: 'Saga Call'
});
const mapDispatchToProps = {
  toggleCall
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonWithStatus);
