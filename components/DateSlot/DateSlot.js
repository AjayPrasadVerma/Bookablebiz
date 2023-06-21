import DateTimeNavigation from "./DateTimeNavigation";
import classes from "./DateSlot.module.css";
import tclasses from "./DateTimeNavigation.module.css";
import TimeSlot from "./TimeSlot";

const DateSlot = () => {
  return (
    <>
      <div className={classes["date-container"]}>
        <DateTimeNavigation />
      </div>
      <div className={tclasses["time-container"]}>
        <h5 className={tclasses.today}>Choose slots</h5>
        <TimeSlot />
      </div>
    </>
  );
};

export default DateSlot;
