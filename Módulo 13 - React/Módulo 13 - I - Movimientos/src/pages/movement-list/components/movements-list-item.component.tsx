import { MovementVM } from "../movements-list.vm";
import classes from "./movements-list-item.component.module.css";

interface Props {
  movementItem: MovementVM;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>
        {movementItem.transaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>
        {movementItem.realTransaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span
        className={`${classes.dataCell} ${classes.alignRight} 
          ${Number(movementItem.amount) < 0 ? classes.redNumbersAlert : ""}`}
      >
        {movementItem.amount} €
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.balance} €
      </span>
    </div>
  );
};
