import classes from "./TimeSlot.module.css";

const DailyAMTime = () => {
  return (
    <>
      <div className={classes.time}>
        <div>8:00AM</div>
      </div>
      <div className={classes["time-bg"]}>
        <div>8:35AM</div>
      </div>
      <div className={classes.time}>
        <div>10:10AM</div>
      </div>
      <div className={classes.time}>
        <div>10:45AM</div>
      </div>
      <div className={classes.time}>
        <div>11:20AM</div>
      </div>
    </>
  );
};

export default DailyAMTime;
