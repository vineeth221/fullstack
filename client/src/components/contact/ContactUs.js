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
import Blog from '../../components/blogs/blog';
import Spinner from 'react-bootstrap/Spinner';
import Loader from '../loader/Loader';
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const ContactUs = () => {
  const COLORS_TOP = ["#2f73a1", "#2f73a1", "#2f73a1", "#2f73a1"];
  const color = useMotionValue(COLORS_TOP[0]);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formHeight, setFormHeight] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.email.notifications);
  const sendEmailSuccessState = useSelector((state) => state.email.success);
  const isLoading = useSelector((state) => state.email.isLoading);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;


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

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1200);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isLoadingContent ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className={isSmallScreen ? 'small-sub-space' : 'small-space'} />
          <div className="flex flex-col px-4">
            <ToastContainer position="top-right" />
            <div className="flex justify-center" style={{padding:"1rem"}}>
              <div ref={formRef} className="w-full max-w-md p-8 shadow-md form-clr">
                <h1 className="mb-6 text-3xl font-bold text-white ">Contact Us</h1>
                <Form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-white text-2xl">Hi 👋! My name is...</label>
                    <input type="text" id="name" name="name" placeholder="My Name is..." className='form-input-clr w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0 text-white mt-2' value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-white text-2xl">My Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="My Phone..." value={mobile} onChange={(e) => setMobile(e.target.value)} className='form-input-clr w-full rounded-md mt-2 p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0 text-white' />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-2xl text-white">My Email</label>
                    <input type="text" id="email" name="email" placeholder="My Email..." value={email} onChange={(e) => setEmail(e.target.value)} className='form-input-clr w-full rounded-md mt-2 p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0 text-white' />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-2xl text-white">I'd love to ask about...</label>
                    <textarea id="message" placeholder="Whatever your heart desires :)" name="message" value={subject} onChange={(e) => setSubject(e.target.value)} rows="4" className='form-input-clr w-full mt-2 rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0 text-white'></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    style={{
                      border,
                      boxShadow,
                    }}
                    whileHover={{
                      scale: 1.015,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                  >
                    Join with us
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                  </motion.button>
                </Form>
              </div>
              {!isSmallScreen && <Blog />}
            </div>
            {isSmallScreen && <Blog />}
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
