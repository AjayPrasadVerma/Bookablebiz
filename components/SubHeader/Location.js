import LocationIcon from "./locationIcon";
import classes from "./Location.module.css";

const Location = () => {
  return (
    <div className={classes.location}>
      <LocationIcon />
      <p>Location</p>
      <span>1</span>
    </div>
  );
};

export default Location;
