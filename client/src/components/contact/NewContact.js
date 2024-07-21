import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmail, addNotification, startLoading, stopLoading, sendEmailFail } from '../../components/actions/emailActions';
import { FiArrowRight } from "react-icons/fi";
import Spinner from 'react-bootstrap/Spinner';

const NewContact = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [isSmallScreen, setIsSmallScreen] = useState(false); // Initialize the state for screen size
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState(''); // 'success' or 'error'
    const formRef = useRef(null);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.email.isLoading);

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

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000); // Hide alert after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    const encryptButtonHandler = async () => {
        try {
            dispatch(startLoading());
            const emailData = { email, name, mobile, subject };
            await dispatch(sendEmail(emailData));
            setName('');
            setMobile('');
            setSubject('');
            setEmail('');
            setAlertMessage('Email sent successfully!');
            setAlertType('success');
        } catch (error) {
            console.error('Error sending email:', error);
            setAlertMessage('Failed to send email.');
            setAlertType('error');
            dispatch(sendEmailFail());
        } finally {
            dispatch(stopLoading());
            setShowAlert(true); // Ensure this is always executed
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
        return smsError;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const payload = { name, mobile, subject, email };
        const smsError = validation(payload);
        if (Object.keys(smsError).length > 0) {
            const firstErrorMessage = Object.values(smsError)[0];
            setAlertMessage(firstErrorMessage);
            setAlertType('error');
            setShowAlert(true);
            return;
        }
        encryptButtonHandler();
    };

    return (
        <div className="flex flex-col">
            <ToastContainer position="top-right" />
            {showAlert && (
                <div
                    className={`fixed bottom-4 right-4 flex items-center justify-between rounded-md shadow-lg text-white ${alertType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
                    style={{
                        padding: "8px",
                        fontSize: '12px',
                        transition: 'opacity 0.5s ease-in-out',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        maxWidth: '300px',
                    }}
                >
                    <span>{alertMessage}</span>
                    <button onClick={() => setShowAlert(false)} className="ml-4 text-lg font-bold">&times;</button>
                </div>
            )}
            <div className="flex justify-center md:justify-end" style={{ padding: ".3rem" }}>
                <div ref={formRef} className="w-full max-w-xs p-4 bg-white rounded-lg border shadow-md">
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
