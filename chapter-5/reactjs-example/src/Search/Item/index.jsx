import { useState } from "react";
import styles from "./styles.module.css";

const Item = ({ label, placeholder, isSelect = false, options = [] }) => {
  const [value, setValue] = useState(isSelect ? placeholder : "");

  return (
    <div className={styles.item}>
      <div className={styles.label}>{label}</div>
      {isSelect ? (
        <select
          value={value}
          className={styles.input}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        >
          <option>{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          value={value}
          className={styles.input}
          placeholder={placeholder}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      )}
    </div>
  );
};

export default Item;
