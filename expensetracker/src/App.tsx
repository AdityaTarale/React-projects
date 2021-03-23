import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transcations from './components/Transcations';
import AddTransaction from './components/AddTransaction';

//?
import { StoreProvider } from './store/Store';

function App() {
    return (
        <StoreProvider>
            <div className='Flex'>
                <Header />
                <Balance />
                <IncomeExpense />
                <Transcations />
                <AddTransaction />
            </div>
        </StoreProvider>
    );
}

export default App;
