import * as apiModel from "./api/movements-list.api-model";
import { mapAccountInfoFromApiToVm, mapMovementsListFromApiToVm } from "./movements-list.mapper";

describe("mapAccountInfoFromApiToVm", () => {
    it("should return data as modelVM when reads from API ", () => {
        // Arrange
        const accountInfo : apiModel.Account = {
            id: "1",
            iban: "ES6621000418401234567891",
            type: "1",
            name: "Ahorros", 
            balance: "3000",
            lastTransaction: "2019-12-09T21:30:00",
        }

        // Act
        const resultVM = mapAccountInfoFromApiToVm(accountInfo);

        // Assert
        expect(resultVM).toEqual({
            id: "1",
            iban: "ES6621000418401234567891",
            type: "1",
            name: "Ahorros", 
            balance: "3000",
            lastTransaction: new Date("2019-12-09T21:30:00"),
        })
    });
});

describe("mapMovementListFromApiToVm", () => {
    it("should return empty array when it feeds empty array", () => {
        // Arrange
        const movementList : apiModel.Movement[] = [];

        // Act
        const resultVM = mapMovementsListFromApiToVm(movementList);

        // Assert
        expect(resultVM).toEqual([])
    });

    it("should return data as modelVM when reads from API ", () => {
        // Arrange
        const movementList : apiModel.Movement[] = [
            {
                id: "124",
                description: "Regalo",
                amount: -30,
                balance: 970,
                transaction: "2019-12-09T21:30:00",
                realTransaction: "2019-12-09T21:30:00",
                accountId: "1"
            },
            {
                id: "125",
                description: "Bizum",
                amount: 15,
                balance: 985,
                transaction: "2019-12-07T11:30:00",
                realTransaction: "2019-12-08T20:00:10",
                accountId: "1"
            }
        ]
        
        // Act
        const resultVM = mapMovementsListFromApiToVm(movementList);

        // Assert
        expect(resultVM).toEqual([
            {
                id: "124",
                description: "Regalo",
                amount: "-30",
                balance: "970",
                transaction: new Date("2019-12-09T21:30:00"),
                realTransaction: new Date("2019-12-09T21:30:00"),
                accountId: "1"
            },
            {
                id: "125",
                description: "Bizum",
                amount: "15",
                balance: "985",
                transaction: new Date("2019-12-07T11:30:00"),
                realTransaction: new Date("2019-12-08T20:00:10"),
                accountId: "1",
            }
        ])
    });
});