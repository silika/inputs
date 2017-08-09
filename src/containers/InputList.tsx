import '../App.scss';
import { connect } from 'react-redux';
import InputList from '../components/inputsList/InputsList';

function mapStateToProps (state) {
    return {
        inputs: state.inputs,
    };
}

export const InputListContainer = connect(mapStateToProps)(InputList);