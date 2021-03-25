import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    box-shadow: inset;
    border: none;
    font-size: 1.6rem;
    font-family: "Helvetica neue", Helvetica, sans-serif;
    color: #22d099;
    font-weight: 200;
    box-shadow: 2px 2px 10px #666;
`

const useActivities = (initialState, options) => {

    const [state, updateState] = useState(initialState);

    const SelectActivities = () => (
        <Fragment>
            <Select
                onChange={e => updateState(e.target.value)}
                value={state}
            >
                <option value="">Sector de actividad</option>
                {options.map(activity => (
                    < option key = { activity.code }
                    value = { activity.code }
                    > { activity.description }</option>
                ))}
            </Select>
        </Fragment >
    );
return [state, SelectActivities, updateState];
}

export default useActivities;