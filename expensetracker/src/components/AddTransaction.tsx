import React from 'react';
import { Store } from '../store/Store';
import { ITransaction } from '../interfaces/Interfaces';

const AddTransaction = () => {
    const { dispatch } = React.useContext(Store);
    const [text, setText] = React.useState<string>('');
    const [amount, setAmount] = React.useState<number>(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setText('');
        setAmount(0);

        const id = Math.floor(Math.random() * 1000);

        const transaction: ITransaction = {
            id: id,
            text: text,
            amount: amount,
        };

        dispatch({ type: 'ADD_TRASC', payload: transaction });
    };

    return (
        <React.Fragment>
            <div style={{ margin: '20px 0px 0px 5px' }}>
                Add new transaction:
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor=''>Text</label>
                    <input
                        type='text'
                        placeholder='Enter text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor=''>Amount</label>
                    <input
                        type='number'
                        placeholder='Enter amount'
                        value={amount}
                        onChange={(e) => setAmount(e.target.valueAsNumber)}
                        required
                    />
                </div>
                <div className='form-control' style={{ border: 'none' }}>
                    <button type='submit' className='submit'>
                        ADD
                    </button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default AddTransaction;
