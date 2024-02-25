import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmail } from '../../components/actions/emailActions';
import { Form } from 'react-bootstrap';
import SpotlightButton from '../../components/contact/SpotlightButton';
import SpringModal from '../../components/contact/SpringModal';
import Notifications, { generateRandomNotif } from './Notification';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [buttonState, setButtonState] = useState('nothing');
  const [notifications, setNotifications] = useState([]);

  const dispatch = useDispatch();
  const emailState = useSelector((state) => state.email);

  useEffect(() => {
    const allFieldsFilled = name && mobile && subject && email;
    setButtonState(allFieldsFilled ? 'nothing' : 'disabled');
  }, [name, mobile, subject, email]);

  const encryptButtonHandler = async () => {
    if (buttonState === 'disabled') {
      // Show notification for empty fields
      setNotifications((prevNotifications) => [
        generateRandomNotif('Please fill in all fields'),
        ...prevNotifications,
      ]);
      return;
    }

    try {
      setButtonState('loading');
      const emailData = { email, name, mobile, subject };
      await dispatch(sendEmail(emailData));
      setShowModal(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setButtonState('error');
    }
  };

  useEffect(() => {
    if (emailState.success || emailState.error) {
      const timerId = setTimeout(() => {
        setButtonState('nothing');
        setName('');
        setMobile('');
        setSubject('');
        setEmail('');
        setShowModal(true);
      });

      return () => clearTimeout(timerId);
    }
  }, [emailState.success, emailState.error]);

  const handleCloseModal = () => {
    setButtonState('nothing');
    setName('');
    setMobile('');
    setSubject('');
    setEmail('');
    setShowModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    encryptButtonHandler();
  };

  return (
    <div>
      <ToastContainer position="top-right" />
      <Form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Names</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="Phone">Your Phone</label>
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your message</label>
          <textarea type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <SpotlightButton onSubmit={encryptButtonHandler} />
      </Form>
      <SpringModal isOpen={showModal} setIsOpen={setShowModal} handleCloseModal={handleCloseModal} />
      <Notifications notifications={notifications} setNotifications={setNotifications} />
    </div>
  );
};

export default ContactUs;
