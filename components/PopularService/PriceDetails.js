import classes from "./PriceDetails.module.css";

const PriceDetails = ({ price, discount }) => {
  return (
    <div className={classes["price-details"]}>
      <div className={classes.tag}>Price</div>
      <div className={classes.price}>
        <div className={classes.sgd}>SGD</div>
        <div className={classes.amount}>{`${price}.00`}</div>
        <div className={classes.discount}>{discount}</div>
      </div>
    </div>
  );
};

export default PriceDetails;
