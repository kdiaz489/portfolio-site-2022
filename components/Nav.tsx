import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import { useTheme } from '../context/theme';
import Sun from './Sun';
import Moon from './Moon';
import Hamburger from './Hamburger';
import useDeviceDetect from '../utils/useDeviceDetect';

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const { width } = useDeviceDetect();

  return (
    <>
      {width && width > 700 ? (
        <aside
          className={`${styles.sidebar} ${
            theme === 'dark' ? [theme, styles.sidebar_dark].join(' ') : 'light'
          } `}>
          <h2>Karen Diaz</h2>
          <nav className={styles.nav_main}>
            <ul className={styles.noBullets}>
              <li className={styles.navItem}>
                <Link href="/about">
                  <a className={styles.navLink}>* About Me</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/technologies">
                  <a className={styles.navLink}>* Technologies</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/contact">
                  <a>* Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
          <footer>
            <div onClick={toggleTheme} className={styles.darkmode}>
              {theme === 'light' ? <Sun /> : <Moon />}
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className={styles.footerText}>2022</span>
            </div>
          </footer>
        </aside>
      ) : (
        <nav className={`${theme}`}>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: '0 4rem',
              backgroundColor: 'inherit',
            }}>
            <li>KSD</li>
            <li>
              <Hamburger />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
