import DailyAMTime from "./DailyAMTime";
import DailyPMTime from "./DailyPMTime";
import classes from "./TimeSlot.module.css";

const TimeSlot = () => {
  return (
    <>
      <div className={classes.am}>
        <DailyAMTime />
      </div>
      <div className={classes.am}>
        <DailyPMTime />
      </div>
    </>
  );
};

export default TimeSlot;
