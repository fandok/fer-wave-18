import Item from "./Item";
import styles from "./styles.module.css";

const Search = () => (
  <div className={styles.search}>
    <Item />
    <Item />
    <Item />
    <Item />
    <button className={styles.button}>Cari Mobil</button>
  </div>
);

export default Search;
