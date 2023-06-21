import Feature from "./Feature";
import classes from "./SubHeader.module.css";
import Title from "./Title";
import Location from "./Location";
import Info from "./Info";
import Benefits from "./Benefit";
import SGD from "./SGD";
import ImageSlide from "./ImageSlide";
import Search from "../Search/Search";

const SubHeader = () => {
  return (
    <>
      <Search />
      <div className={classes.head}>
        <div className={classes.title}>
          <Title />
          <Location />
          <Feature />
          <Info />
          <Benefits />
          <SGD />
        </div>
        <ImageSlide />
      </div>
    </>
  );
};

export default SubHeader;
