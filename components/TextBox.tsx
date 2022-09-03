import { FunctionComponent } from 'react';
import { useTheme } from '../context/theme';
import styles from '../styles/TextBox.module.css';

const TextBox: FunctionComponent = ({ children }) => {
  const { theme } = useTheme();
  console.log('theme = ', theme);
  return (
    <div className={theme !== 'dark' ? styles.textbox : styles.textboxDark}>
      <span className={styles.textbox_heading}>{children}</span>
    </div>
  );
};

export default TextBox;
