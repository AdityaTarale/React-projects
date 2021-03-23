import React from 'react';
import { Store } from '../store/Store';
import { ITransaction } from '../interfaces/Interfaces';

const Balance = () => {
    const { state } = React.useContext(Store);

    const amounts = state.transactions.map(
        (transaction: ITransaction) => transaction.amount
    );

    let balance = 0;

    if (amounts.length) {
        balance = amounts.reduce((acc: number, curr: number) => acc + curr);
    }

    return (
        <React.Fragment>
            <div className='Balance'>
                <h3>Balance</h3>
                <span>
                    <h3> &#8377;{balance}</h3>
                </span>
            </div>
        </React.Fragment>
    );
};

export default Balance;
