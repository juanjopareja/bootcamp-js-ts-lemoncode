export interface NewAccountVm {
    type: string;
    name: string;
}

export const createEmptyNewAccount = (): NewAccountVm => ({
    type: "",
    name: "",
})

export interface ExistAccountVm {
    id: string;
    alias: string;
}

export interface NewAccountError {
    type: string;
    name: string;
}

export const createEmptyNewAccountError = (): NewAccountError => ({
    type: "",
    name: "",
})

export interface FieldValidationResult {
    succeeded: boolean;
    errorMessage?: string;
}

export interface FormValidationResult {
    succeeded: boolean;
    errors: NewAccountError;
}