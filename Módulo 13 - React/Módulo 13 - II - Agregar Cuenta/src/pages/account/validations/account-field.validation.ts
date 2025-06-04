import { ALREADY_EXISTS_MESSAGE, buildRequiredFieldValidationFailedResponse, buildValidationFailedResult, buildValidationSucceededResult, isStringValueInformed, newAccountNameAleadyExists } from "@/common/validations";
import { ExistAccountVm, FieldValidationResult } from "../account.vm";

export const validateNewAccountNameField = (value: string, accountList: ExistAccountVm[]): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }

    if (newAccountNameAleadyExists(value,accountList)) {
        return buildValidationFailedResult(ALREADY_EXISTS_MESSAGE);
    }

    return buildValidationSucceededResult();
}

export const validateNewAccountTypeField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }

    return buildValidationSucceededResult();
}

export const validateNewAccountAlreadyExistsName = (value: string, accountList: ExistAccountVm[]): FieldValidationResult => {
    if (newAccountNameAleadyExists(value, accountList)) {
        return buildValidationFailedResult(ALREADY_EXISTS_MESSAGE);
    }

    return buildValidationSucceededResult();
}

