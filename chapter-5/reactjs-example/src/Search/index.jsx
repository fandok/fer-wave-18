import styles from "./styles.module.css";
import { PRICE_OPTION } from "../constants";

const Search = ({
  isDisabled = false,
  formInput = {},
  setFormInput,
  handleSearch,
}) => {
  return (
    <div className={styles.search}>
      <div className={styles.item}>
        <div className={styles.label}>Nama Mobil</div>
        <input
          disabled={isDisabled}
          onChange={(e) => {
            setFormInput({
              ...formInput,
              name: e.target.value,
            });
          }}
          value={formInput.name}
          placeholder="Ketik nama/tipe mobil"
          className={styles.input}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Kategori</div>
        <select
          disabled={isDisabled}
          value={formInput.category}
          onChange={(e) => {
            setFormInput({
              ...formInput,
              category: e.target.value,
            });
          }}
          className={styles.input}
        >
          <option value="" disabled>
            Masukan Kapasitas Mobil
          </option>
          <option value="small">2 - 4 orang</option>
          <option value="medium">4 - 6 orang</option>
          <option value="large">6 - 8 orang</option>
        </select>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Harga</div>
        <select
          disabled={isDisabled}
          onChange={(e) => {
            setFormInput({
              ...formInput,
              ...PRICE_OPTION[e.target.value],
            });
          }}
          defaultValue=""
          className={styles.input}
        >
          <option value="" disabled>
            Masukan Harga Sewa per Hari
          </option>
          <option value="small">{"< Rp. 400.000"}</option>
          <option value="medium">Rp. 400.000 - Rp. 600.000</option>
          <option value="large">{"> Rp. 600.000"}</option>
        </select>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Status</div>
        <select
          disabled={isDisabled}
          onChange={(e) => {
            setFormInput({
              ...formInput,
              isRented: Boolean(e.target.value),
            });
          }}
          defaultValue="disewa"
          className={styles.input}
        >
          <option value="disewa">Disewa</option>
          <option value="">Tidak Disewa</option>
        </select>
      </div>
      <button
        disabled={isDisabled}
        onClick={handleSearch}
        className={styles.button}
      >
        Cari Mobil
      </button>
    </div>
  );
};

export default Search;
