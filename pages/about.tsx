import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useTheme } from '../context/theme';
import styles from '../styles/Contact.module.css';
import axios from 'axios';
import TextBox from '../components/TextBox';
import Nav from '../components/Nav';
import useMediaQuery from '@mui/material/useMediaQuery';

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
        <h1 style={{ padding: '20px' }}>About Me</h1>
        <div style={{ padding: '20px' }}>
          <TextBox>
            Hi there! My name is Karen Diaz and I am a Full Stack Engineer ⭐️
          </TextBox>
          <p>
            Im a developer located in Southern California with experience in
            both front and back end development. More specifically with
            JavaScript. Im dedicated to bringing enrichment to users by solving
            problems related to design, performance and data. Im passionate,
            curious, and a huge believer in lifelong learning as I always seek
            to improve and build upon my current knowledge.
            <br />
            <br />
            With two years of technical experience and a history of
            volunteering, community and customer service oriented work, I am
            committed to providing effective solutions for both employers and
            customers using my work. When Im not solving technical problems, I
            love to take long walks in nature, read, and study visual arts. 🌾🎨
            <br />
            <br />
            📩 I would love to learn more about YOU, lets chat! Feel free to
            contact me directly here via my site or email me at
            kstefdiaz@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
