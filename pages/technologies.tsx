import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useTheme } from '../context/theme';
import styles from '../styles/Contact.module.css';
import axios from 'axios';

export default function Technologies() {
  const { theme, toggleTheme } = useTheme();
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
    <main className={`main ${theme}`}>
      <div className={'container'}>
        <div className={'content'}>
          <div>
            <h1 style={{ width: '780px', margin: '19.92px auto' }}>
              Technologies
            </h1>
          </div>
          <div>
            <div style={{ height: '80vh', padding: '20px' }}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
