import classes from "./PopularItem.module.css";
import Rating from "./Rating";
import PriceDetails from "./PriceDetails";
import Image from "./Image";

const PopularItem = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className={classes.main}>
          <div>
            <Image url={item.imageURL} />
          </div>
          <div className={classes["item-info"]}>
            <div className={classes.details}>
              <div className={classes.title}>
                <div className={classes.name}>{item.title}</div>
                <div className={classes.time}> {`(${item.time}min.)`}</div>
              </div>
              <div className={classes.title}>
                <div className={classes.code}>{item.code}</div>
              </div>
              <div className={classes.title}>
                <Rating />
              </div>
              <PriceDetails price={item.price} discount={item.discount} />
              <div className={classes.border}></div>
              <button>Add</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PopularItem;
