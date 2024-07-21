import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmail, addNotification, startLoading, stopLoading, sendEmailFail } from '../../components/actions/emailActions';
import { FiArrowRight } from "react-icons/fi";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import Spinner from 'react-bootstrap/Spinner';

const NewContact = () => {
    const color = useMotionValue("#2f73a1");
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [formHeight, setFormHeight] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const formRef = useRef(null);
    const dispatch = useDispatch();
    // const notifications = useSelector((state) => state.email.notifications);
    // const sendEmailSuccessState = useSelector((state) => state.email.success);
    const isLoading = useSelector((state) => state.email.isLoading);
    const border = useMotionTemplate`1px solid ${color}`;
    // const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    useEffect(() => {
        if (formRef.current) {
            setFormHeight(formRef.current.offsetHeight);
        }
    }, [formRef]);

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
            smsError.name = "Please enter a valid name";
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
        // if (!payload.subject) {
        //   smsError.subject = "Please fill the subject";
        // } else if (payload.subject.length < 5 || payload.subject.length > 300) {
        //   smsError.subject = "Subject should be min 5 and max 300 characters";
        // }
        return smsError;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const payload = { name, mobile, subject, email };
        const smsError = validation(payload);
        if (Object.keys(smsError).length > 0) {
            const firstErrorKey = Object.keys(smsError)[0];
            const firstErrorMessage = smsError[firstErrorKey];
            dispatch(addNotification(firstErrorMessage));
            return;
        }
        encryptButtonHandler();
    };

    return (
        <div className="flex flex-col">
            <ToastContainer position="top-right" />
            <div className="flex justify-center md:justify-end" style={{ padding: ".3rem" }}>
                <div ref={formRef} className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md">
                    <h1 className="mb-2 text-lg font-bold text-gray-900 text-center">Book FREE Appointment</h1>
                    <p className="mb-3 text-gray-900 text-center text-xs">For Best Quality Construction At Affordable Rates</p>
                    <Form onSubmit={handleFormSubmit} className="space-y-3">
                        <div>
                            <input type="text" id="name" name="name" placeholder="Full Name" className='w-full rounded-md p-2 bg-[#f1f4fd] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <input type="tel" id="phone" name="phone" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className='w-full rounded-md p-2 bg-[#f1f4fd] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm' />
                        </div>
                        <div>
                            <input type="text" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full rounded-md p-2 bg-[#f1f4fd] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm' />
                        </div>
                        <button
                            type="submit"
                            className="group relative flex w-full items-center justify-center gap-1.5 rounded-md bg-blue-500 px-4 py-2 text-white text-sm"
                        >
                            {isLoading ? <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner> : (
                                <>
                                    Get Free Consultation
                                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                                </>
                            )}
                        </button>
                        <p className="text-gray-900 text-center text-xs"> <span style={{ color: "red" }}>*</span> By submitting this form, I confirm that I have read and agreed to accept 17Columns</p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default NewContact;
