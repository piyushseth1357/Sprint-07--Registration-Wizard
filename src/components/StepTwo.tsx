import { useState } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import type { FormData } from '../schema';
import { motion } from 'framer-motion';

interface StepTwoProps {
  methods: UseFormReturn<FormData>;
}

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const StepTwo = ({ methods }: StepTwoProps) => {
  const { register, formState: { errors } } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
      <motion.div className="form-group" variants={itemVariants}>
        <label htmlFor="email">Email Address</label>
        <div className="input-wrapper">
          <input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            className={errors.email ? 'error' : ''}
            {...register('email')}
          />
        </div>
        {errors.email && (
          <span className="error-message">
            <AlertCircle size={16} />
            {errors.email.message}
          </span>
        )}
      </motion.div>

      <motion.div className="form-group" variants={itemVariants}>
        <label htmlFor="password">Password</label>
        <div className="input-wrapper">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            className={errors.password ? 'error' : ''}
            {...register('password')}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && (
          <span className="error-message">
            <AlertCircle size={16} />
            {errors.password.message}
          </span>
        )}
      </motion.div>

      <motion.div className="form-group" variants={itemVariants}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="input-wrapper">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="••••••••"
            className={errors.confirmPassword ? 'error' : ''}
            {...register('confirmPassword')}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            tabIndex={-1}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <span className="error-message">
            <AlertCircle size={16} />
            {errors.confirmPassword.message}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default StepTwo;
