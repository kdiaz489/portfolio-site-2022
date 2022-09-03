import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav';
import { ThemeProvider } from '../context/theme';
import useDeviceDetect from '../utils/useDeviceDetect';

function MyApp({ Component, pageProps }: AppProps) {
  const { width } = useDeviceDetect();
  return (
    <>
      <ThemeProvider>
        <div
          style={{
            display: 'flex',
            flexDirection: `${width && width < 700 ? 'column' : 'row'}`,
          }}>
          <Nav />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
