import HeartIcon from "./HeartIcon";
import classes from "./Rating.module.css";

const Rating = () => {
  return (
    <div className={classes.rate}>
      <div>
        <div className={classes["star-rating"]}>
          <span className={classes.star} data-rating="1">
            &#9733;
          </span>
          <span className={classes.star} data-rating="2">
            &#9733;
          </span>
          <span className={classes.star} data-rating="3">
            &#9733;
          </span>
          <span className={classes.star} data-rating="4">
            &#9733;
          </span>
          <span className={classes.star} data-rating="5">
            &#9733;
          </span>
        </div>
      </div>
      <HeartIcon />
    </div>
  );
};
export default Rating;
