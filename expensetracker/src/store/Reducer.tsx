import { IInitialState, ITransaction } from '../interfaces/Interfaces';

const Reducer = (state: IInitialState, action: any) => {
    switch (action.type) {
        case 'ADD_TRASC':
            return {
                transactions: [...state.transactions, action.payload],
            };
        case 'REMOVE_TRASC':
            return {
                transactions: state.transactions.filter(
                    (transaction: ITransaction) =>
                        transaction.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default Reducer;
