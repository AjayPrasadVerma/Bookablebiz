import DateSlot from "./DateSlot";
import classes from "./BookingSlot.module.css";

const BookingSlot = () => {
  return (
    <div className={classes.booking}>
      <DateSlot />
    </div>
  );
};

export default BookingSlot;
