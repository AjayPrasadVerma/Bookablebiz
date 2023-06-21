import classes from "./SearchInput.module.css";
import SearchIcon from "./SearchIcon";
import LocationIcon from "../SubHeader/locationIcon";

const SearchInput = () => {
  return (
    <div className={classes.searchInput}>
      <div className={classes.search}>
        <label>
          <SearchIcon />
        </label>
        <input type="text" placeholder="Haircut" />
      </div>
      <div className={classes.border}>|</div>
      <div className={classes.search}>
        <label>
          <LocationIcon />
        </label>
        <input type="text" placeholder="City, Zip Code" />
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchInput;
