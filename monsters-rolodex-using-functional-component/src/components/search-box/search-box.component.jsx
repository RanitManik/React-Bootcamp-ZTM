import "./search-box.styles.css";

const SearchBox = ({ placeholder, className, onChangeHandler }) => (
  <input type="search" placeholder={placeholder} className={className}
         onChange={onChangeHandler} />
);

export default SearchBox;