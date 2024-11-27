/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const [successful, setSuccessful] = useState(false);

  return (
    <div className="ContactForm">
      <div className="ContactForm__header">
        <h2>C</h2>
        <div className="ContactForm__header__div__list">
          <div className="ContactForm__header__div ContactForm__header__div--Size" />
        </div>
        <h2>NACT</h2>
      </div>
      <div className="ContactForm__paragraph">
        <p>
          AWS S3 Have a question or want to work together? Leave your details and I will get back to you as soon as
          possible.
        </p>
      </div>
      <div className="ContactForm__form">
        <input
          className={nameErr ? 'ContactForm__form--border' : ''}
          value={name}
          ref={nameRef}
          type="text"
          placeholder="Name"
          onChange={() => {
            setName(nameRef.current?.value || '');
          }}
        />
        <input
          className={emailErr ? 'ContactForm__form--border' : ''}
          value={email}
          ref={emailRef}
          type="email"
          placeholder="Email"
          onChange={() => {
            setEmail(emailRef.current?.value || '');
          }}
        />
        <textarea
          className={messageErr ? 'ContactForm__form--border' : ''}
          value={message}
          ref={messageRef}
          onChange={() => {
            setMessage(messageRef.current?.value || '');
          }}
          placeholder="Phone"
        />
      </div>
      <div className="ContactForm__bottom">
        <div className="ContactForm__bottom__message">
          {successful && (
            <div>
              <span>Message submmited.</span>
            </div>
          )}
          <div>{nameErr && <span>Please enter a name.</span>}</div>
          <div>{emailErr && <span>Please enter a valid Email address.</span>}</div>
          <div>{messageErr && <span>Please enter a message.</span>}</div>
        </div>
        <div className="ContactForm__bottom__button">
          <div
            onClick={() => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (name.length === 0) {
                setNameErr(true);
              } else if (!emailRegex.test(email)) {
                setEmailErr(true);
              } else if (message.length === 0) {
                setMessageErr(true);
              } else {
                setSuccessful(true);
                setNameErr(false);
                setEmailErr(false);
                setMessageErr(false);
                setEmail('');
                setName('');
                setMessage('');
              }
            }}
          >
            SUBMIT
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
