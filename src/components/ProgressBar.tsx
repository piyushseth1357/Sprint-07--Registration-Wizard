interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="progress-container">
      <div className="progress-labels">
        <span>Step {step} of {totalSteps}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  );
};

export default ProgressBar;
