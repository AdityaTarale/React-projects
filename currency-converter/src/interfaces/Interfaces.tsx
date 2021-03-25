export interface IInitialState {
    options: Array<string>;
    from: string;
    to: string;
    exchangeRate: number | undefined;
}

export interface IConverterProps {
    FromTo: string;
    handleChange?: (e: any) => void;
    amount: number;
}
