import React from "react";
import classes from "./account-form.component.module.css";
import { createEmptyNewAccount, createEmptyNewAccountError, ExistAccountVm, NewAccountError, NewAccountVm } from "../account.vm";
import { validateForm } from "../validations/account-form.validation";
import { getAccountList } from "../api";
import { mapAccountFromApiToVm } from "../account.mapper";

interface Props {
    onCreateAccount: (account: NewAccountVm) => void;
}

export const AccountFormComponent: React.FC<Props> = (props) => {
    const { onCreateAccount } = props

    const [account, setAccount] = React.useState<NewAccountVm>(createEmptyNewAccount());
    const [accountList, setAccountList] = React.useState<ExistAccountVm[]>([]);
    const [errors, setErrors] = React.useState<NewAccountError>(createEmptyNewAccountError());

    React.useEffect(() => {
        setAccount(createEmptyNewAccount());
        getAccountList().then((result) => {
            const accountList = result.map(mapAccountFromApiToVm);
            setAccountList(accountList);
        });
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formValidationResult = validateForm(account, accountList);
        setErrors(formValidationResult.errors);

        if (formValidationResult.succeeded) {
            onCreateAccount(account);
        }
    }

    const handleFieldChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={classes.formContainer}>
                    <div>
                        <label>Tipo de cuenta: </label>
                        <select 
                            className={classes.medium} 
                            name="type" 
                            value={account.type} 
                            onChange={handleFieldChange}>
                            <option value="">Seleccionar</option>
                            <option id="1" value="1">Cuenta Corriente</option>
                            <option id="2" value="2">Cuenta de Ahorro</option>
                            <option id="3" value="3">Cuenta de Nómina</option>
                        </select>
                        <p className={classes.error}>{errors.type}</p>
                    </div>
                    <div>
                        <label>Alias: </label>
                        <input 
                            type="text" 
                            className={classes.medium} 
                            name="name" 
                            onChange={handleFieldChange}
                        />
                        <p className={classes.error}>{errors.name}</p>
                    </div>
                </div>
                <div className={classes.buttonContainer}>
                    <button className={classes.button} type="submit">GUARDAR</button>
                </div>
            </form>
        </div>
    )
}