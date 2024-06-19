import Item from "./Item";
import styles from "./styles.module.css";

const Search = () => (
  <div className={styles.search}>
    <Item label="Nama Mobil" placeholder="Ketik nama/tipe mobil" />
    <Item
      label="Kategori"
      isSelect
      placeholder="Masukan Kapasitas Mobil"
      options={["2 - 4 orang", "4 - 6 orang", "6 - 8 orang"]}
    />
    <Item
      label="Harga"
      isSelect
      placeholder="Masukan Harga Sewa per Hari"
      options={["< Rp. 400.000", "Rp. 400.000 - Rp. 600.000", "> Rp. 600.000"]}
    />
    <Item
      label="Status"
      isSelect
      placeholder="Disewa"
      options={["Tidak Disewa"]}
    />
    <button className={styles.button}>Cari Mobil</button>
  </div>
);

export default Search;
