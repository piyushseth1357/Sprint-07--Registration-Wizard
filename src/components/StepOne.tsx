import type { UseFormReturn } from 'react-hook-form';
import { AlertCircle } from 'lucide-react';
import type { FormData } from '../schema';
import { motion } from 'framer-motion';

interface StepOneProps {
  methods: UseFormReturn<FormData>;
}

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const StepOne = ({ methods }: StepOneProps) => {
  const { register, formState: { errors } } = methods;

  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
      <motion.div className="form-group" variants={itemVariants}>
        <label htmlFor="firstName">First Name</label>
        <div className="input-wrapper">
          <input
            id="firstName"
            type="text"
            placeholder="e.g. Rahul"
            className={errors.firstName ? 'error' : ''}
            {...register('firstName')}
          />
        </div>
        {errors.firstName && (
          <span className="error-message">
            <AlertCircle size={16} />
            {errors.firstName.message}
          </span>
        )}
      </motion.div>

      <motion.div className="form-group" variants={itemVariants}>
        <label htmlFor="lastName">Last Name</label>
        <div className="input-wrapper">
          <input
            id="lastName"
            type="text"
            placeholder="e.g. Sharma"
            className={errors.lastName ? 'error' : ''}
            {...register('lastName')}
          />
        </div>
        {errors.lastName && (
          <span className="error-message">
            <AlertCircle size={16} />
            {errors.lastName.message}
          </span>
        )}
      </motion.div>

      <motion.div className="form-group" variants={itemVariants}>
        <label htmlFor="dateOfBirth">Date of Birth (DD/MM/YYYY)</label>
        <div className="input-wrapper">
          <input
            id="dateOfBirth"
            type="text"
            placeholder="DD/MM/YYYY"
            maxLength={10}
            className={errors.dateOfBirth ? 'error' : ''}
            {...register('dateOfBirth', {
              onChange: (e) => {
                let val = e.target.value.replace(/\D/g, '');
                if (val.length > 2) val = val.slice(0, 2) + '/' + val.slice(2);
                if (val.length > 5) val = val.slice(0, 5) + '/' + val.slice(5, 9);
                e.target.value = val;
              }
            })}
          />
        </div>
        {errors.dateOfBirth && (
          <span className="error-message">
            <AlertCircle size={16} />
            {errors.dateOfBirth.message}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default StepOne;
