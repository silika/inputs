import { connect } from 'react-redux';
import { InputsList } from '../components/inputsList';

const getInputs = (inputs) => Object.keys(inputs).map((inputId) => inputs[inputId])
const mapStateToProps = (state) => ({'inputs': getInputs(state.inputs) });

export const InputsListContainer = connect(mapStateToProps)(InputsList);