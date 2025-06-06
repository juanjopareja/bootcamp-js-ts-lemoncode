import { MovementVM } from "../movements-list.vm";
import { MovementListItemComponent } from "./movements-list-item.component";
import classes from "./movements-list-table.component.module.css";

interface Props {
  movementList: MovementVM[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>FECHA</span>
          <span className={classes.headerCell}>FECHA VALOR</span>
          <span className={classes.headerCell}>DESCRIPCIÓN</span>
          <span className={classes.headerCell}>IMPORTE</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
        </div>

        {movementList.map((movement) => (
          <MovementListItemComponent
            key={movement.accountId}
            movementItem={movement}
          />
        ))}
      </div>
    </>
  );
};
