import { AccountVM } from "../movements-list.vm";
import classes from "./movements-list-account-info.component.module.css";

interface Props {
    accountInfo: AccountVM;
}

export const MovementListAccountInfo: React.FC<Props> = (props) => {
    const { accountInfo } = props;
    
    return (
        <>
            <div className={classes.headerContainer}>
                <h1>Saldos y Últimos Movimientos</h1>
                <div className={classes.headerAmountContainer}>
                    <p>SALDO DISPONIBLE</p>
                    <span>{accountInfo.balance}</span>
                </div>
            </div>
            <div className={classes.dataAccount}>
                <p>Alias: {accountInfo.name}</p>
                <p>IBAN: {accountInfo.iban}</p>
            </div>
        </>
    )
}