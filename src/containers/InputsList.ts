import { connect } from 'react-redux';
import InputsList from '../components/inputsList/InputsList';

const mapStateToProps = (state) => ({'inputs': state.inputs });

export const InputsListContainer = connect(mapStateToProps)(InputsList);