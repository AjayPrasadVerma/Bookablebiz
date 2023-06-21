import classes from "./SelectedServices.module.css";
import DeleteIcon from "./DeleteIcon";

const SelectedServices = (props) => {
  return (
    <>
      <div className={classes.services}>
        <div className={classes.items}>
          <DeleteIcon />
          <div className={classes.content}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.schedule}>
              <div className={classes.date}>{props.date}</div>
              <div className={classes.border}>|</div>
              <div className={classes.time}>{props.time}</div>
              <div className={classes.border}>|</div>
              <div className={classes.duration}>{props.duration}</div>
            </div>
          </div>
          <div className={classes.price}>{props.price}</div>
        </div>
      </div>
    </>
  );
};

export default SelectedServices;
