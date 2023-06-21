import DateSlot from "./DateSlot";
import classes from "./BookingSlot.module.css";
import UserIcon from "./UserIcon";
import Cart from "../Cart/Cart";

const BookingSlot = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
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
        <div>
          <Cart />
        </div>
      </div>
    </>
  );
};

export default BookingSlot;
