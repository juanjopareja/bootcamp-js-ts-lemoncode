import Axios from "axios";
import { Movement, Account } from "./movements-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<Movement[]> =>
    Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
        ({ data }) => data
    );
    
export const getAccount = (accountId: string): Promise<Account> => {
        const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list/${accountId}`;
        return Axios.get<Account>(urlAccount).then(({ data }) => data);
    }

