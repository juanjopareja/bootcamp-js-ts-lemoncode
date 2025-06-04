import React from "react";
import classes from "./account.page.module.css";
import { AppLayout } from "@/layouts";
import { NewAccountVm } from "./account.vm";
import { AccountFormComponent } from "./components";
import { mapNewAccountFromVmToApi } from "./account.mapper";
import { saveAccount } from "./api";

export const AccountPage: React.FC = () => {
  const handleCreateAccount = (createInfo: NewAccountVm) => {
    const newAccountInfo = mapNewAccountFromVmToApi(createInfo);
    saveAccount(newAccountInfo).then((result) => {
      if (result) {
        alert("Cuenta creada exitosamente");
      } else {
        alert("Error al crear la cuenta");
      }
    });
  }

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta Bancaria</h1>
        </div>
        <AccountFormComponent
          onCreateAccount={handleCreateAccount}
        />
      </div>
    </AppLayout>
  )
};
