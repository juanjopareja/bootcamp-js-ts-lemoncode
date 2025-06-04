import * as apiModel from "./api";
import * as viewModel from "./account.vm";

export const mapAccountFromApiToVm = (account: apiModel.Account): viewModel.ExistAccountVm => ({
    id: account.id,
    alias: account.name,
});

export const mapNewAccountFromVmToApi = (newAccount: apiModel.NewAccount): viewModel.NewAccountVm => ({
    type: newAccount.type,
    name: newAccount.name,
});