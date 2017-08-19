import * as React from 'react';
import { InputsListContainer } from '../../containers/InputsList';
import { Empty } from '../empty';

export default function Inputs({ isEmpty }) {
    return (
        <div className="inputsPanel">
            <div className="inputsPanel__content">
                {
                    !isEmpty ? <InputsListContainer />
                             :  <Empty />
                }
            </div>
        </div>
    );
}