import { connect } from 'react-redux';
import Panel from '../components/panel/Panel';

const mapStateToProps = (state) => ({'isEmpty': !state.inputs.length });

export const PanelContainer = connect(mapStateToProps)(Panel);