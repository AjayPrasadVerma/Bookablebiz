import classes from "./Search.module.css";
import SearchInput from "./SearchInput";
const Search = () => {
  return (
    <div className={classes["search-conatiner"]}>
      <SearchInput />
    </div>
  );
};

export default Search;
