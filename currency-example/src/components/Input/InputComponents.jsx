import React from "react";

import styles from "./InputComponents.module.scss";

export const Input = ({ onChangeValue, value }) => {
  return (
    <input
      className={styles.wrapper}
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type="number"
      placeholder={0}
    />
  );
};
