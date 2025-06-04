import Axios from "axios";
import { Account, NewAccount } from "./account.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<Account[]> => 
    Axios.get<Account[]>(urlAccount).then(({ data }) => data);

export const saveAccount = (account: NewAccount): Promise<NewAccount> =>
    Axios.post<NewAccount>(urlAccount, account).then(({ data }) => data);