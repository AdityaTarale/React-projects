import React from 'react';
import { Store } from '../store/Store';
import { ITransaction } from '../interfaces/Interfaces';

const TransactionList = ({ id, text, amount }: ITransaction) => {
    const { dispatch } = React.useContext(Store);

    return (
        <React.Fragment>
            <li className='tran-list' key={id}>
                <span>{text}</span>
                <p style={{ color: amount > 0 ? 'green' : 'red' }}>
                    &#8377; {amount}
                </p>
                <button
                    className='list-btn'
                    onClick={() =>
                        dispatch({ type: 'REMOVE_TRASC', payload: id })
                    }
                >
                    X
                </button>
            </li>
        </React.Fragment>
    );
};

export default TransactionList;
