import React from 'react';
import { Reducer } from './Reducer';
import { IInitialState } from '../interfaces/Interfaces';
import axios from 'axios';

const initialState: IInitialState = {
    options: [],
    from: '',
    to: '',
    exchangeRate: undefined,
};

export const Store = React.createContext<IInitialState | any>(initialState);

export const StoreProvider = ({
    children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
    const [state, dispatch] = React.useReducer(Reducer, initialState);

    const BASE_URL = `https://api.exchangeratesapi.io/latest`;

    React.useEffect(() => {
        axios.get(BASE_URL).then((res) => {
            const optionList = [res.data.base, ...Object.keys(res.data.rates)];
            dispatch({ type: 'UPDATE-LIST', payload: optionList });
            dispatch({
                type: 'INITIAL-VALUES',
                payload: {
                    from: res.data.base,
                    to: Object.keys(res.data.rates)[0],
                },
            });
        });
    }, [BASE_URL]);

    React.useEffect(() => {
        axios
            .get(`${BASE_URL}?base=${state.from}&symbols=${state.to}`)
            .then((res) => {
                dispatch({
                    type: 'EXCHANGE-RATE',
                    payload: res.data.rates[state.to],
                });
            });
    }, [BASE_URL, state.from, state.to]);

    return (
        <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
    );
};
