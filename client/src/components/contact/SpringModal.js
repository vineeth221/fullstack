import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';

const SpringModal = ({ isOpen, setIsOpen, handleCloseModal }) => {
  const closeModal = () => {
    if (typeof setIsOpen !== 'function') {
      return;
    }
    setIsOpen(false);
    handleCloseModal();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={handleContentClick}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">Welcome to our Construction Updates!</h3>
              <p className="text-center mb-6">
              Stay informed about the latest developments in our ongoing construction projects.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={closeModal}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                   Close
                </button>
                <button
                  onClick={closeModal}
                  className="bg-white hover:opacity-90 transition-opacity text-dark font-semibold w-full py-2 rounded"
                >
                  Success!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

SpringModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default SpringModal;
