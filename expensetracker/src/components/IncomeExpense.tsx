import React from 'react';
import { Store } from '../store/Store';
import { ITransaction } from '../interfaces/Interfaces';

const IncomeExpense = () => {
    const { state } = React.useContext(Store);

    const incomeAmounts = state.transactions.filter(
        (transaction: ITransaction) => transaction.amount > 0
    );
    const expenseAmounts = state.transactions.filter(
        (transaction: ITransaction) => transaction.amount < 0
    );

    let income = 0;
    let expense = 0;

    if (incomeAmounts.length) {
        income = state.transactions
            .map((transaction: ITransaction) => transaction.amount)
            .filter((amount: number) => amount > 0)
            .reduce((acc: number, curr: number) => acc + curr);
    }
    if (expenseAmounts.length) {
        expense = state.transactions
            .map((transaction: ITransaction) => transaction.amount)
            .filter((amount: number) => amount < 0)
            .reduce((acc: number, curr: number) => acc + curr);
    }

    return (
        <React.Fragment>
            <section className='IncomeExpense'>
                <div>
                    <h3>Income</h3>
                    <span>
                        <h3> &#8377; {income}</h3>
                    </span>
                </div>
                <div>
                    <h3>Expense</h3>
                    <span>
                        <h3>&#8377; {expense}</h3>
                    </span>
                </div>
            </section>
        </React.Fragment>
    );
};

export default IncomeExpense;
