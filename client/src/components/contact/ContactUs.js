import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpringModal from '../../components/contact/SpringModal';
import Notifications, { generateRandomNotif } from './Notification';
import { sendEmail, addNotification, showModal, hideModal, startLoading, stopLoading, sendEmailFail } from '../../components/actions/emailActions';
import '../../components/landing/index.css';
import Footer from '../../components/landing/Footer';
import Navbar from '../../components/navbar/Navbar';
import Spinner from 'react-bootstrap/Spinner';
import Loader from '../loader/Loader';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formHeight, setFormHeight] = useState(0);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.email.notifications);
  const sendEmailSuccessState = useSelector((state) => state.email.success);
  const isLoading = useSelector((state) => state.email.isLoading); 

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  }, [formRef]);
  
  useEffect(() => {
    console.log('isLoading:', isLoading);
  }, [isLoading]); 

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingContent(false);
    }, 2000);
  }, []);

  const encryptButtonHandler = async () => {
    try {
      dispatch(startLoading());
      const emailData = { email, name, mobile, subject };
      await dispatch(sendEmail(emailData));
      setName('');
      setMobile('');
      setSubject('');
      setEmail('');
    } catch (error) {
      console.error('Error sending email:', error);
      dispatch(sendEmailFail());
      setIsModalOpen(true);
    } finally {
      dispatch(stopLoading());
    }
  };

  const validation = (payload) => {
    const smsError = {};
    const nameRegex = /^[a-zA-Z ]{3,30}$/;
    if (!payload.name) {
      smsError.name = "Please enter your name";
    } else if (!nameRegex.test(payload.name)) {
      smsError.name = "Please enter valid name";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!payload.email) {
      smsError.email = "Please fill your email";
    } else if (!emailRegex.test(payload.email)) {
      smsError.email = "Please input a valid email";
    }
    const mobileRegex = /^[0-9]{10}$/;
    if (!payload.mobile) {
      smsError.mobile = "Please fill your mobile number";
    } else if (!mobileRegex.test(payload.mobile)) {
      smsError.mobile = "Mobile number should be exactly 10 digits";
    }
    if (!payload.subject) {
      smsError.subject = "Please fill the subject";
    } else if (payload.subject.length < 5 || payload.subject.length > 300) {
      smsError.subject = "Subject should be min 5 and max 300 characters";
    }
    return smsError;
  };  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, mobile, subject, email };
    const smsError = validation(payload);
    if (Object.keys(smsError).length > 0) {
      const firstErrorKey = Object.keys(smsError)[0];
      const firstErrorMessage = smsError[firstErrorKey]; 
      dispatch(addNotification(generateRandomNotif(firstErrorMessage, 3)));
      return; 
    }
    encryptButtonHandler();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch(hideModal());
  };

  useEffect(() => {
    if (sendEmailSuccessState) {
      setIsModalOpen(true);
      dispatch(showModal());
    }
  }, [sendEmailSuccessState, dispatch]);

  return (
    <>
      {isLoadingContent ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className='small-space' />
          <div className="min-h-screen flex flex-col justify-center items-center">
            <ToastContainer position="top-right" />
            <div className="flex justify-center items-start w-full">
              <div ref={formRef} className="w-full max-w-md p-8 bg-white rounded-lg shadow-md form-clr mr-4">
                <h1 className="mb-6 text-3xl font-bold text-white ">Contact Us</h1>
                <Form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-white text-2xl">Hi 👋! My name is...</label>
                    <input type="text" id="name" name="name" placeholder="My Name is..." className='bg-indigo-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0 text-white mt-2' value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-white mb-4 text-2xl">My Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="My Phone..." value={mobile} onChange={(e) => setMobile(e.target.value)} className='bg-indigo-700 w-full rounded-md mt-2 p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0 text-white' />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-2xl text-white">My Email</label>
                    <input type="text" id="email" name="email" placeholder="My Email..." value={email} onChange={(e) => setEmail(e.target.value)} className='bg-indigo-700 w-full rounded-md mt-2 p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0 text-white' />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-2xl text-white">I'd love to ask about...</label>
                    <textarea id="message" placeholder="Whatever your heart desires :)" name="message" value={subject} onChange={(e) => setSubject(e.target.value)} rows="4" className='bg-indigo-700 w-full mt-2 rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0 text-white'></textarea>
                  </div>
                  <button type="submit" className='bg-white text-indigo-600 w-full rounded-lg py-3 text-center text-lg font-semibold transition-colors duration-[750ms]' disabled={isLoading}>
                    {isLoading ? (
                      <Spinner animation="border" role="status" className="mx-auto">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </Form>
              </div>
            </div>
            <SpringModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} handleCloseModal={handleCloseModal} />
            <div className="notifications-container">
              <Notifications notifications={notifications} />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default ContactUs;
