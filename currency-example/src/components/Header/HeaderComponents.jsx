import React from "react";
import styles from "./HeaderComponents.module.scss";

const defaultCurrencies = ["UAH", "USD", "EUR"];

export const Header = ({ currency, onChangeCurrency }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <header className={styles.dropdown}>
      <div
        className={styles.dropdownBtn}
        onClick={(e) => setIsActive(!isActive)}
      >
        {currency}
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {defaultCurrencies.map((cur) => (
            <div
              onClick={(e) => {
                onChangeCurrency(cur);
                setIsActive(false);
              }}
              key={cur}
            >
              <div className={styles.dropdownItem}>{cur}</div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
