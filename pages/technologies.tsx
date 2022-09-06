import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useTheme } from '../context/theme';
import styles from '../styles/Contact.module.css';
import axios from 'axios';
import TextBox from '../components/TextBox';
import Nav from '../components/Nav';
import useMediaQuery from '@mui/material/useMediaQuery';
import iconArray from '../components/icons';
import experience from '../constants/experience';

export default function About() {
  const { theme, toggleTheme } = useTheme();
  const matches = useMediaQuery('(min-width:641px)');
  const [form, setForm] = useState({});
  const handleForm = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      let res = await axios.post('/api/contact', form);
      alert('Your message has been successfully sent!');
    } catch (error) {
      alert('An error occurred. Try again');
    }
  };

  return (
    <div
      className={`main ${theme}`}
      style={{
        display: 'flex',
        flexDirection: `${matches ? 'row' : 'column'}`,
        minHeight: '100vh',
      }}>
      <Nav />
      <div
        style={{
          zIndex: '0',
          maxWidth: `${matches ? '900px' : ''}`,
          padding: '20px',
        }}>
        <h1 style={{ padding: '20px' }}>Experience</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          {experience.map((expItem, index) => (
            <div key={index} style={{ padding: '20px' }}>
              <p>{expItem.title}</p>
              <p>{expItem.years}</p>
            </div>
          ))}
        </div>
        <h2 style={{ padding: '20px' }}>Skills</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}>
          {iconArray.map((Icon, index) => (
            <div key={index} style={{ padding: '20px' }}>
              <Icon
                height={65}
                width={65}
                color={theme === 'dark' ? '#9e9b8d' : '#7f120a'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
