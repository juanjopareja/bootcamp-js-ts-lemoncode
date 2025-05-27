import React from "react";
import { AccountVM, createEmptyAccount, MovementVM } from "./movements-list.vm";
import { AppLayout } from "@/layouts";
import { MovementListTableComponent } from "./components/movements-list-table.component";
import { getAccount, getMovements } from "./api";
import { mapMovementsListFromApiToVm, mapAccountInfoFromApiToVm } from "./movements-list.mapper";
import { useParams } from "react-router-dom";
import { MovementListAccountInfo } from "./components/movements-list-account-info.component";
import classes from "./movements-list.page.module.css";


export const MovementListPage: React.FC = () => {
  const { id } = useParams();
  const [accountInfo, setAccountInfo] = React.useState<AccountVM>(createEmptyAccount());
  const [movementList, setMovementList] = React.useState<MovementVM[]>([]);

  React.useEffect(() => {
    if (id) {
      getAccount(id).then((result) =>
      setAccountInfo(mapAccountInfoFromApiToVm(result)));
      getMovements(id).then((result) => 
      setMovementList(mapMovementsListFromApiToVm(result)));
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListAccountInfo accountInfo={accountInfo} />
        <MovementListTableComponent movementList={movementList}/>
      </div>
    </AppLayout>
  );
};
