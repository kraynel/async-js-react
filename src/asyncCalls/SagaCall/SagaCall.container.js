import { connect } from 'react-redux';
import { statusSelector, toggleCall } from '../../modules/UpsideDown';
import SagaCall from './SagaCall.component';

const mapStateToProps = state => ({
  strangerStatus: statusSelector(state)
});
const mapDispatchToProps = {
  toggleCall
};

export default connect(mapStateToProps, mapDispatchToProps)(SagaCall);
