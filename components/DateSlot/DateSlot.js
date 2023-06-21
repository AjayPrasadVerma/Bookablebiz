import DateTimeNavigation from "./DateTimeNavigation";
import classes from "./DateSlot.module.css";

const DateSlot = () => {
  return (
    <div className={classes["date-container"]}>
      <DateTimeNavigation />
    </div>
  );
};

export default DateSlot;
