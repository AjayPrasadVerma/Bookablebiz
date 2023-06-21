import WeekDate from "./WeekDate";
import classes from "./DateTimeNavigation.module.css";
import TimeSlot from "./TimeSlot";

const DateTimeNavigation = () => {
  const today = new Date();
  const options = { month: "short", year: "numeric" };
  const formattedDate = today.toLocaleString("en-IN", options);

  return (
    <>
      <h5 className="today">{formattedDate}</h5>
      <div className={classes["date-container"]}>
        <div>&lt;</div>
        <WeekDate />
        <div>&gt;</div>
      </div>
      <h5 className="today">Choose slots</h5>
      <div className={classes["time-container"]}>
        <TimeSlot />
      </div>
    </>
  );
};

export default DateTimeNavigation;
