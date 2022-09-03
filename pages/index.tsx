import Nav from '../components/Nav';
import TextBox from '../components/TextBox';
import { useTheme } from '../context/theme';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className={`main ${theme}`} style={{ height: '100vh' }}>
      <div className={`container`}>
        <div className={`content`}>
          <h1>test</h1>
          <TextBox>Welcome!</TextBox>
        </div>
      </div>
    </main>
  );
}
