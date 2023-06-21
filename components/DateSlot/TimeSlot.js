import classes from "./TimeSlot.module.css";

const TimeSlot = () => {
  return (
    <div className={classes["time.container"]}>
      <div className={classes.am}></div>
    </div>
  );
};

export default TimeSlot;
