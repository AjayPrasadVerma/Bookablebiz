import DateSlot from "./DateSlot";
import classes from "./BookingSlot.module.css";
import UserIcon from "./UserIcon";

const BookingSlot = () => {
  return (
    <>
      <div className={classes.booking}>
        <DateSlot />
        <div className={classes.change}>
          <div className={classes.user}>
            <UserIcon />
            <div>Anyone</div>
          </div>
          <button>Change</button>
        </div>
      </div>
    </>
  );
};

export default BookingSlot;
