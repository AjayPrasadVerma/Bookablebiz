import classes from "./TimeSlot.module.css";

const DailyPMTime = () => {
  return (
    <>
      <div className={classes.time}>
        <div>01:00PM</div>
      </div>
      <div className={classes.time}>
        <div>01:35PM</div>
      </div>
      <div className={classes.time}>
        <div>02:10PM</div>
      </div>
      <div className={classes.time}>
        <div>02:45PM</div>
      </div>
      <div className={classes.time}>
        <div>03:20PM</div>
      </div>
    </>
  );
};

export default DailyPMTime;
