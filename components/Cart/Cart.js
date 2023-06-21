import classes from "./Cart.module.css";
import DeleteIcon from "./DeleteIcon";
import SelectedServices from "./SelectedServices";

const Cart = () => {
  return (
    <div className={classes.container}>
      <SelectedServices
        title="Men’s Hair cut"
        date="24 -26 May"
        time="08:35 AM - 09:05AM"
        duration="30 Min."
        price="$40.00"
      />

      <SelectedServices
        title="Hair straitening"
        date="24May"
        time="09:10 AM - 09:40AM"
        duration="30 Min."
        price="$55.00"
      />

      <div className={classes.line}></div>
      <div className={classes.totalPrice}>
        <div className={classes.totalInfo}>Total</div>
        <div className={classes.totalInfo}>$265.00</div>
      </div>
      <div className={classes.totalPrice}>
        <div className={classes["totalInfo-narrow"]}>Discount</div>
        <div className={classes.totalInfo}>$00.00</div>
      </div>
      <div className={classes.totalPrice}>
        <div className={classes["totalInfo-narrow"]}>Tax(2%)</div>
        <div className={classes.totalInfo}>$01.90</div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.totalPrice}>
        <div className={classes.total}>Total</div>
        <div className={classes.totalAmount}>$96.90</div>
      </div>
      <button>Add to Cart</button>
      <div className={classes.totalPrice}>
        <div className={classes.number}>+65 9828 8938</div>
        <button href="tocall:+65 9828 8938">Call</button>
      </div>
    </div>
  );
};

export default Cart;
