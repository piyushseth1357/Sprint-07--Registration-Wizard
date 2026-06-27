import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessView = () => {
  return (
    <motion.div 
      className="success-container"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
    >
      <motion.div 
        className="success-icon"
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
      >
        <CheckCircle size={48} />
      </motion.div>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Registration Complete!
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Your account has been successfully created. We've sent a confirmation 
        email with further instructions.
      </motion.p>
      
      <motion.button 
        className="btn btn-primary" 
        style={{ marginTop: '2rem', width: '100%' }}
        onClick={() => window.location.reload()}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Over
      </motion.button>
    </motion.div>
  );
};

export default SuccessView;
