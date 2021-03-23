export interface ITransaction {
    id: number;
    text: string;
    amount: number;
}

export interface IInitialState {
    transactions: Array<ITransaction>;
}

export type TAction =
    | { type: string; payload: ITransaction }
    | { type: string; payload: number };

export type Dispatch = React.Dispatch<TAction>;
