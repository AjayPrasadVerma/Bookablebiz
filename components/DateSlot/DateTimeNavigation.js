import WeekDate from "./WeekDate";
import classes from "./DateTimeNavigation.module.css";

const DateTimeNavigation = () => {
  const today = new Date();
  const options = { month: "short", year: "numeric" };
  const formattedDate = today.toLocaleString("en-IN", options);

  return (
    <>
      <h5 className={classes.today}>{formattedDate}</h5>
      <div className={classes["date-container"]}>
        <div>&lt;</div>
        <WeekDate />
        <div>&gt;</div>
      </div>
    </>
  );
};

export default DateTimeNavigation;
