import styles from './header.module.css';
import React from "react";
import SearchBar from './search';

export const Header_bar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="././src/components/header/img/logo.svg" alt="logo" />
      </div>

      
      <SearchBar />

      <div className={styles.rightBlock}>
        <div className={styles.iconsWrapper}>
          <div data-property-1="выкл" className={styles.iconPlaceholder}>
            <div className={styles.iconPlaceholderInner} />
          </div>
          <img src="././src/components/header/img/msg.svg" alt="logo" />
          <img src="././src/components/header/img/user.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Header_bar;