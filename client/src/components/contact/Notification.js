// Notifications.js

import React, { useEffect } from 'react';
import { FiCheckSquare, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
    >
      <FiCheckSquare className=" mt-0.5" />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

const SlideInNotifications = ({ notifications, setNotifications }) => {
  const removeNotif = (id) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  return (
    <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
      {notifications.map((n) => (
        <Notification removeNotif={removeNotif} {...n} key={n.id} />
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