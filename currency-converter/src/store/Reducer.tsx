import { IInitialState } from '../interfaces/Interfaces';

export const Reducer = (state: IInitialState, action: any) => {
    switch (action.type) {
        case 'UPDATE-LIST':
            return {
                ...state,
                options: action.payload,
            };

        case 'INITIAL-VALUES':
            return {
                ...state,
                from: action.payload.from,
                to: action.payload.to,
            };
        case 'from':
            return {
                ...state,
                from: action.payload,
            };
        case 'to':
            return {
                ...state,
                to: action.payload,
            };

        case 'EXCHANGE-RATE':
            return {
                ...state,
                exchangeRate: action.payload,
            };

        default:
            return state;
    }
};
