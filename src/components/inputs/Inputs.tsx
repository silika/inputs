import * as React from 'react';
import { InputsListContainer } from '../../containers/InputsList';
import Empty from '../empty/Empty';

const Inputs = ({ isEmpty }) => (
        <div className="inputsPanel">
            <div className="inputsPanel__content">
            {
                !isEmpty ? <InputsListContainer />
                         :  <Empty />
            }
            </div>
        </div>
    );

export default Inputs;