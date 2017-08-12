import * as React from 'react';
import { InputsListContainer } from '../../containers/InputsList';
import Empty from '../empty/Empty';

const Panel = ({ isEmpty }) => (
        <div className="inputsPanel">
            <div className="inputsPanel__filter">filters</div>
            <div className="inputsPanel__content">
            {
                isEmpty ? <Empty />
                        : <InputsListContainer />
            }
            </div>
        </div>
    );

export default Panel;