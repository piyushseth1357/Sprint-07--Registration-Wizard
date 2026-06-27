import type { UseFormReturn } from 'react-hook-form';
import type { FormData } from '../schema';
import { motion } from 'framer-motion';

interface StepThreeProps {
  methods: UseFormReturn<FormData>;
}

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const StepThree = ({ methods }: StepThreeProps) => {
  const { getValues } = methods;
  const data = getValues();

  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
      <motion.h3 
        variants={itemVariants} 
        style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--text-primary)' }}
      >
        Review your details
      </motion.h3>
      
      <div className="review-container">
        <motion.div className="review-item" variants={itemVariants}>
          <span className="review-label">First Name</span>
          <span className="review-value">{data.firstName}</span>
        </motion.div>
        
        <motion.div className="review-item" variants={itemVariants}>
          <span className="review-label">Last Name</span>
          <span className="review-value">{data.lastName}</span>
        </motion.div>
        
        <motion.div className="review-item" variants={itemVariants}>
          <span className="review-label">Date of Birth</span>
          <span className="review-value">{data.dateOfBirth}</span>
        </motion.div>
        
        <motion.div className="review-item" variants={itemVariants}>
          <span className="review-label">Email Address</span>
          <span className="review-value">{data.email}</span>
        </motion.div>
        
        <motion.div className="review-item" variants={itemVariants}>
          <span className="review-label">Password</span>
          <span className="review-value">••••••••</span>
        </motion.div>
      </div>
      
      <motion.p 
        variants={itemVariants}
        style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', textAlign: 'center' }}
      >
        Please review your information carefully before submitting.
      </motion.p>
    </motion.div>
  );
};

export default StepThree;
