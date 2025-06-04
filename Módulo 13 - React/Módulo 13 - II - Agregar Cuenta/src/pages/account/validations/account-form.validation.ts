import { ExistAccountVm, FormValidationResult, NewAccountVm } from "../account.vm";
import { validateNewAccountNameField, validateNewAccountTypeField } from "./account-field.validation";

export const validateForm = (account: NewAccountVm, accountList: ExistAccountVm[]): FormValidationResult => {
    const fieldValidationResult = [
        validateNewAccountTypeField(account.type),
        validateNewAccountNameField(account.name, accountList),
    ];

    const formValidationResult = {
        succeeded: fieldValidationResult.every((f) => f.succeeded),
        errors: {
            type: fieldValidationResult[0].errorMessage ?? "",
            name: fieldValidationResult[1].errorMessage ?? "",
        },
    };

    return formValidationResult;
}