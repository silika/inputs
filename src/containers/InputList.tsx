import { connect } from 'react-redux';
import InputList from '../components/inputsList/InputsList';

const mapStateToProps = (state) => ({'inputs': state.inputs});

export const InputListContainer = connect(mapStateToProps)(InputList);