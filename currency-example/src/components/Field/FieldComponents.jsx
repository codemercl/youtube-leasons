import React from "react";
import { Header, Input } from "../../components";

import styles from "./FieldComponent.module.scss";

export const Field = ({ value, currency, onChangeValue, onChangeCurrency }) => {
  return (
    <div className={styles.field}>
      <Header currency={currency} onChangeCurrency={onChangeCurrency} />
      <Input onChangeValue={onChangeValue} value={value} />
    </div>
  );
};
