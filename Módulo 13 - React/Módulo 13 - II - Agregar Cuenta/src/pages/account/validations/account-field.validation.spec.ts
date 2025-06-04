import { ALREADY_EXISTS_MESSAGE, REQUIRED_FIELD_MESSAGE } from "@/common/validations/validation.const";
import { validateNewAccountAlreadyExistsName, validateNewAccountNameField, validateNewAccountTypeField } from "./account-field.validation";
import { ExistAccountVm } from "../account.vm";

describe("account-field.validation specs", () => {
    describe("validateAccountType", () => {
        it("should return false when account id is empty", () => {
            // Arrange
            const value = "";
            
            // Act
            const result = validateNewAccountTypeField(value);
            
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
        });
        
        it("should return true when account id is informed", () => {
            // Arrange
            const value = "1";
            
            // Act
            const result = validateNewAccountTypeField(value);
            
            // Assert
            expect(result.succeeded).toBeTruthy();
        });
    });

    describe("validateNameField", () => {
        it("should return false when account name is empty", () => {
            // Arrange
            const value = "";
            const accountList: ExistAccountVm[] = [{id:"1", alias:"ahorros"}];

            // Act
            const result = validateNewAccountNameField(value, accountList);
            
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
        });
        
        it("should return true when account name is informed", () => {
            // Arrange
            const value = "Nómina";
            const accountList: ExistAccountVm[] = [{id:"1", alias:"ahorros"}];

            // Act
            const result = validateNewAccountNameField(value, accountList);
            
            // Assert
            expect(result.succeeded).toBeTruthy();
        });

        it("should return false when the account name already exists", () => {
            // Arrange
            const value = "ahorros";
            const accountList: ExistAccountVm[] = [{id:"1", alias:"ahorros"}];
            
            // Act
            const result = validateNewAccountAlreadyExistsName(value, accountList);
            
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(ALREADY_EXISTS_MESSAGE);
        });

        it("should return true when the account name does not exists", () => {
            // Arrange
            const value = "ahorros2";
            const accountList: ExistAccountVm[] = [{id:"1", alias:"ahorros"}];
            
            // Act
            const result = validateNewAccountAlreadyExistsName(value, accountList);

            // Assert
            expect(result.succeeded).toBeTruthy();
        });
    });
});