export interface MovementVM {
    id: string,
    description: string,
    amount: string,
    balance: string,
    transaction: Date,
    realTransaction: Date,
    accountId: string,
}

export interface AccountVM {
    id: string,
    iban: string,
    type: string,
    name: string,
    balance: string,
    lastTransaction: Date,
}

export const createEmptyAccount = (): AccountVM => ({
    id: "",
    iban: "",
    type: "",
    name: "",
    balance: "",
    lastTransaction: new Date(""),
})