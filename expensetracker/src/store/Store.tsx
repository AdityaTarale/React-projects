import React from 'react';
import Reducer from './Reducer';
import { IInitialState } from '../interfaces/Interfaces';

const initialState: IInitialState = {
    transactions: [],
};

export const Store = React.createContext<IInitialState | any>(initialState);

export const StoreProvider = ({
    children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
    const [state, dispatch] = React.useReducer(Reducer, initialState);

    return (
        <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
    );
};
