import React from 'react';
import { IConverterProps } from '../interfaces/Interfaces';
import { Store } from '../store/Store';

const Converter: React.FC<IConverterProps> = ({
    FromTo,
    handleChange,
    amount,
}): JSX.Element => {
    const { state, dispatch } = React.useContext(Store);
    const { options } = state;

    const rer = state.exchangeRate;
    return (
        <div>
            <input
                type='number'
                value={amount ?? rer}
                onChange={handleChange}
            />
            <select
                name=''
                id=''
                value={state[FromTo]}
                onChange={(e) =>
                    dispatch({ type: FromTo, payload: e.target.value })
                }
            >
                {options.map((option: string) => {
                    return (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Converter;
