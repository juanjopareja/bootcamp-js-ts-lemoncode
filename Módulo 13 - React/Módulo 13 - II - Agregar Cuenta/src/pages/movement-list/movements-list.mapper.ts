import * as apiModel from "./api/movements-list.api-model";
import * as viewModel from "./movements-list.vm";

export const mapMovementsListFromApiToVm = (
    movementsList: apiModel.Movement[]): viewModel.MovementVM[] =>
    movementsList.map((movement) => ({
        id: movement.id,
        description: movement.description,
        amount: movement.amount.toString(),
        balance: movement.balance.toString(),
        transaction: new Date(movement.transaction),
        realTransaction: new Date(movement.realTransaction),
        accountId: movement.accountId,
    }));

export const mapAccountInfoFromApiToVm = (
    accountList: apiModel.Account): viewModel.AccountVM => {
        const AccountVM: viewModel.AccountVM = {
            id: accountList.id,
            iban: accountList.iban,
            type: accountList.type,
            name: accountList.name,
            balance: accountList.balance.toString(),
            lastTransaction: new Date(accountList.lastTransaction),
        }
        return AccountVM;
    }

 