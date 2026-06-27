import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { formSchema, type FormData } from './schema';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import ProgressBar from './components/ProgressBar';
import SuccessView from './components/SuccessView';

function App() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const { handleSubmit, trigger, formState: { errors }, watch } = methods;

  // Watch all fields to ensure reactivity for conditional disabling
  watch();

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) {
      fieldsToValidate = ['firstName', 'lastName', 'dateOfBirth'];
    } else if (step === 2) {
      fieldsToValidate = ['email', 'password', 'confirmPassword'];
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log("Finalized Submission Payload:", data);
    setIsSuccess(true);
  };

  const canGoNext = () => {
    const values = methods.getValues();
    if (step === 1) {
      return !errors.firstName && !errors.lastName && !errors.dateOfBirth && 
             values.firstName && values.lastName && values.dateOfBirth;
    }
    if (step === 2) {
      return !errors.email && !errors.password && !errors.confirmPassword && 
             values.email && values.password && values.confirmPassword;
    }
    return true;
  };

  return (
    <div className="wizard-container">
      {!isSuccess ? (
        <>
          <div className="wizard-header">
            <h1>Create Account</h1>
            <p>Join us today by completing this quick setup.</p>
          </div>
          
          <ProgressBar step={step} totalSteps={3} />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ minHeight: '320px' }}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1" 
                    initial={{ x: 50, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    exit={{ x: -50, opacity: 0 }} 
                    transition={{ duration: 0.3 }}
                  >
                    <StepOne methods={methods} />
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div 
                    key="step2" 
                    initial={{ x: 50, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    exit={{ x: -50, opacity: 0 }} 
                    transition={{ duration: 0.3 }}
                  >
                    <StepTwo methods={methods} />
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div 
                    key="step3" 
                    initial={{ x: 50, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    exit={{ x: -50, opacity: 0 }} 
                    transition={{ duration: 0.3 }}
                  >
                    <StepThree methods={methods} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="button-group">
              <button 
                type="button" 
                onClick={prevStep} 
                disabled={step === 1} 
                className="btn btn-secondary"
              >
                Back
              </button>
              
              {step < 3 ? (
                <button 
                  type="button" 
                  onClick={nextStep} 
                  disabled={!canGoNext()} 
                  className="btn btn-primary"
                >
                  Next
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
            </div>
          </form>
        </>
      ) : (
        <SuccessView />
      )}
    </div>
  );
}

export default App;
