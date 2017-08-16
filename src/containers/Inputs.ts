import { connect } from 'react-redux';
import Inputs from '../components/inputs/Inputs';

const mapStateToProps = (state) => ({'isEmpty': !Object.keys(state.inputs).length });

export const InputsContainer = connect(mapStateToProps)(Inputs);