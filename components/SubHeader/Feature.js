import FeatureIcon from "./FeatureIcon";
import classes from "./Feature.module.css";

const Feature = () => {
  return (
    <div className={classes.three}>
      <div className={classes.feature}>
        <FeatureIcon />
        <div>Feature 1</div>
      </div>
      <div className={classes.feature}>
        <FeatureIcon />
        <div>Feature 2</div>
      </div>
      <div className={classes.feature}>
        <FeatureIcon />
        <div>Feature 3</div>
      </div>
      <div className={classes.feature}>
        <FeatureIcon />
        <div>Feature 4</div>
      </div>
      <div className={classes.feature}>
        <FeatureIcon />
        <div>Feature 5</div>
      </div>
    </div>
  );
};

export default Feature;
