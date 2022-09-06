// react
import { ChangeEvent, SyntheticEvent, useState } from 'react';

// libraries
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

//etc
import { useTheme } from '../context/theme';
import styles from '../styles/Contact.module.css';
import Nav from '../components/Nav';

import useMediaQuery from '@mui/material/useMediaQuery';
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const matches = useMediaQuery('(min-width:641px)');
  const [notification, setNotification] = useState({
    sent: false,
    message: '',
  });
  const { theme, toggleTheme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [form, setForm] = useState({});

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      throw 'error';
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setNotification({
        ...notification,
        sent: true,
        message: 'Email sent! 💌',
      });
    } catch (error) {
      setNotification({
        ...notification,
        sent: true,
        message: 'There was an error sending the email. ❌',
      });
    }
    setTimeout(() => {
      setNotification({ ...notification, sent: false, message: '' });
    }, 5000);
  };

  return (
    <>
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
            flex: '1',
          }}>
          <h1 style={{ padding: '20px' }}>Contact Me</h1>
          <div>
            {notification && (
              <p style={{ width: '780px', margin: '19.92px auto' }}>
                {notification.message}
              </p>
            )}
            <div style={{ height: '80vh' }}>
              <form
                className={
                  theme === 'dark' ? styles.contactFormDark : styles.contactform
                }
                onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form_group}>
                  <label
                    className={
                      theme === 'dark' ? styles.labelDark : styles.label
                    }
                    htmlFor="name">
                    Name
                  </label>
                  <br />
                  <input
                    className={
                      theme === 'dark'
                        ? styles.inputFieldDark
                        : styles.inputfield
                    }
                    type="text"
                    id="name"
                    {...register('name', { required: true })}
                  />
                  {errors.name && (
                    <span style={{ fontSize: '11px' }}>Required.</span>
                  )}
                </div>
                <div className={styles.form_group}>
                  <label
                    className={
                      theme === 'dark' ? styles.labelDark : styles.label
                    }
                    htmlFor="email">
                    Email
                  </label>
                  <br />
                  <input
                    className={
                      theme === 'dark'
                        ? styles.inputFieldDark
                        : styles.inputfield
                    }
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Required.',
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter a valid email',
                      },
                    })}
                  />
                  {errors.email && (
                    <span style={{ fontSize: '11px' }}>
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className={styles.form_group}>
                  <label
                    className={
                      theme === 'dark' ? styles.labelDark : styles.label
                    }
                    htmlFor="subject">
                    Subject
                  </label>
                  <br />
                  <input
                    className={
                      theme === 'dark'
                        ? styles.inputFieldDark
                        : styles.inputfield
                    }
                    type="text"
                    id="subject"
                    {...register('subject', { required: true })}
                  />
                  {errors.subject && (
                    <span style={{ fontSize: '11px' }}>Required.</span>
                  )}
                </div>
                <div className={styles.form_group}>
                  <label
                    className={
                      theme === 'dark' ? styles.labelDark : styles.label
                    }
                    htmlFor="message">
                    Message
                  </label>
                  <br />
                  <textarea
                    className={
                      theme === 'dark'
                        ? styles.inputFieldDark
                        : styles.inputfield
                    }
                    id="message"
                    cols={30}
                    rows={10}
                    {...register('message', {
                      required: 'Required',
                    })}></textarea>
                  {errors.message && (
                    <span style={{ fontSize: '11px' }}>Required.</span>
                  )}
                </div>
                <div
                  className={`${styles.form_group} ${styles.submit_button_div}`}>
                  <button
                    type="submit"
                    className={
                      theme === 'dark'
                        ? styles.submitButtonDark
                        : styles.submit_button
                    }>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    // <main className={`main ${theme}`}>
    //   <div className={'container'}>
    //     <div className={'content'}>
    //       <div>
    //         <h1 style={{ width: '780px', margin: '19.92px auto' }}>Contact</h1>
    //       </div>

    //       {notification && (
    //         <p style={{ width: '780px', margin: '19.92px auto' }}>
    //           {notification.message}
    //         </p>
    //       )}

    //       <div style={{ height: '80vh' }}>
    //         <form
    //           className={styles.contactform}
    //           onSubmit={handleSubmit(onSubmit)}>
    //           <div className={styles.form_group}>
    //             <label className={styles.label} htmlFor="name">
    //               Name
    //             </label>
    //             <br />
    //             <input
    //               className={styles.inputfield}
    //               type="text"
    //               id="name"
    //               {...register('name', { required: true })}
    //             />
    //             {errors.name && (
    //               <span style={{ fontSize: '11px' }}>Required.</span>
    //             )}
    //           </div>
    //           <div className={styles.form_group}>
    //             <label className={styles.label} htmlFor="email">
    //               Email
    //             </label>
    //             <br />
    //             <input
    //               className={styles.inputfield}
    //               type="email"
    //               id="email"
    //               {...register('email', {
    //                 required: 'Required.',
    //                 pattern: {
    //                   value:
    //                     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //                   message: 'Please enter a valid email',
    //                 },
    //               })}
    //             />
    //             {errors.email && (
    //               <span style={{ fontSize: '11px' }}>
    //                 {errors.email.message}
    //               </span>
    //             )}
    //           </div>
    //           <div className={styles.form_group}>
    //             <label className={styles.label} htmlFor="subject">
    //               Subject
    //             </label>
    //             <br />
    //             <input
    //               className={styles.inputfield}
    //               type="text"
    //               id="subject"
    //               {...register('subject', { required: true })}
    //             />
    //             {errors.subject && (
    //               <span style={{ fontSize: '11px' }}>Required.</span>
    //             )}
    //           </div>
    //           <div className={styles.form_group}>
    //             <label className={styles.label} htmlFor="message">
    //               Message
    //             </label>
    //             <br />
    //             <textarea
    //               className={styles.inputfield}
    //               id="message"
    //               cols={30}
    //               rows={10}
    //               {...register('message', { required: 'Required' })}></textarea>
    //             {errors.message && (
    //               <span style={{ fontSize: '11px' }}>Required.</span>
    //             )}
    //           </div>
    //           <div
    //             className={`${styles.form_group} ${styles.submit_button_div}`}>
    //             <button type="submit" className={styles.submit_button}>
    //               Send
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
}
