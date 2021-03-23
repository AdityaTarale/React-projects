import React from 'react';
import TransactionList from './TransactionList';
import { Store } from '../store/Store';
import { ITransaction } from '../interfaces/Interfaces';

const Transcations = () => {
    const { state } = React.useContext(Store);

    return (
        <React.Fragment>
            <span style={{ margin: '10px 0px 10px 5px' }}>Histroy:</span>
            <ul className='tran'>
                {state.transactions.map((transaction: ITransaction) => {
                    const props: ITransaction = {
                        id: transaction.id,
                        text: transaction.text,
                        amount: transaction.amount,
                    };
                    return (
                        <React.Fragment key={transaction.id}>
                            <TransactionList {...props} />
                        </React.Fragment>
                    );
                })}
            </ul>
        </React.Fragment>
    );
};

export default Transcations;
