import Footer from "../Footer";
import Header from "../Header";
import Search from "../Search";
import styles from "./styles.module.css";

const Detail = () => (
  <>
    <div className={styles.hero}>
      <Header />
      <div className={styles.search}>
        <Search />
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles["content-description"]}>
        <div className={styles["description-title"]}>Tentang Paket</div>
        <div className={styles["description-title"]}>Include</div>
        <ul className={styles["description-list"]}>
          <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
          <li>Sudah termasuk bensin selama 12 jam</li>
          <li>Sudah termasuk Tiket Wisata</li>
          <li>Sudah termasuk pajak</li>
        </ul>
        <div className={styles["description-title"]}>Exclude</div>
        <ul className={styles["description-list"]}>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
        <div className={styles["description-title"]}>
          Refund, Reschedule, Overtime
        </div>
        <ul className={styles["description-list"]}>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
      </div>
      <div className={styles["content-info"]}>
        <img className={styles["info-image"]} src="/car.png" alt="car" />
        <div className={styles["info-name"]}>Innova</div>
        <div style={{ marginBottom: 55 }}>
          <img
            style={{ marginRight: 4 }}
            alt="people"
            src="/icons/icon-people.svg"
          />
          <span>6 - 8 orang</span>
        </div>
        <div className={styles["info-total"]}>
          <span>Total</span>
          <span>Rp 500.000</span>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Detail;
