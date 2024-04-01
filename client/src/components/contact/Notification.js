// Notifications.js

import React, { useEffect } from 'react';
import { FiCheckSquare, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { removeNotification } from '../../components/actions/emailActions'; // Import removeNotification action

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      dispatch(removeNotification(id));
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [dispatch, id]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-red-500 pointer-events-auto" // Change the background color class to Tailwind CSS red error color
    >
      <FiCheckSquare className="mt-0.5" />
      <span>{text}</span>
      <button onClick={() => dispatch(removeNotification(id))} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};


const SlideInNotifications = ({ notifications }) => {
  const dispatch = useDispatch(); // Initialize dispatch

  return (
    <div className="fixed top-1/4 right-2 transform -translate-y-1/2 z-50 pointer-events-none">
      {notifications.map((n) => (
        <Notification {...n} key={n.id} /> // Pass down notification props
      ))}
    </div>
  );
};

export const generateRandomNotif = (text) => {
  const data = {
    id: Math.random(),
    text: text,
  };

  return data;
};

export default SlideInNotifications;
