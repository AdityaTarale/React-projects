import React from 'react';
import Converter from './components/Converter';
import Header from './components/Header';

import { Store } from './store/Store';

const App = () => {
    const { state } = React.useContext(Store);
    const { exchangeRate } = state;
    const [amount, setAmount] = React.useState<number>(1);

    return (
        <div>
            <Header />
            <Converter
                FromTo='from'
                handleChange={(e) => setAmount(e.target.value)}
                amount={amount}
            />
            <section>
                <h1 style={{ fontSize: '50px' }}>=</h1>
            </section>
            <Converter FromTo='to' amount={exchangeRate * amount} />
        </div>
    );
};

export default App;
