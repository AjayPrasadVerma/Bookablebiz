import classes from "./WeekDate.module.css";

const WeekDate = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const week = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + i
    );
    const weekName = daysOfWeek[date.getDay()];
    const day = date.getDate();
    week.push({ weekName, date: day });
  }

  console.log(today.getDay());

  return (
    <>
      {week.map((day) => (
        <div
          className={
            day.date == today.getDate() ? classes.CurrentDate : classes.date
          }
          key={day.date}
        >
          <span>{day.weekName}</span>
          <span>{day.date}</span>
        </div>
      ))}
    </>
  );
};

export default WeekDate;
