import styles from "./styles.module.css";

const Item = () => (
  <div className={styles.item}>
    <div className={styles.label}>Nama Mobil</div>
    <input className={styles.input} placeholder="Ketik nama/tipe mobil" />
  </div>
);

export default Item;
