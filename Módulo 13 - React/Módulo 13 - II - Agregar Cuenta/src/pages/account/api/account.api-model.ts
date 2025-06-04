export interface Account {
    id: string;
    iban: string;
    type: string;
    name: string;
    balance: number;
    lastTransaction: string;
}

export interface NewAccount {
    type: string;
    name: string;
}