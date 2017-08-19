import * as React from 'react';
import { InputsListContainer } from '../../containers/InputsList';
import { Empty } from '../empty';

export function Inputs({ isEmpty }) {
    return (
        <div className="inputs">
            <div className="inputs__content">
                {
                    !isEmpty ? <InputsListContainer />
                             :  <Empty />
                }
            </div>
        </div>
    );
}