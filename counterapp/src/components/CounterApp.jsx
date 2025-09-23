import { useState } from 'react';

function WarningIcon(props) {
  return (
    <svg 
      width={18} 
      height={18} 
      viewBox="0 0 24 24" 
      fill="none" 
      {...props} 
      aria-hidden="true"
    >
      <path 
        d="M12 9v4" 
        stroke="#ffd7de" 
        strokeWidth={2} 
        strokeLinecap="round" 
      />
      <circle 
        cx={12} 
        cy={16.5} 
        r={1.25} 
        fill="#ffd7de" 
      />
      <path 
        d="M10.3 3.86 1.82 18a2 2 0 0 0 1.73 3h16.9a2 2 0 0 0 1.74-3L13.7 3.86a2 2 0 0 0-3.4 0Z" 
        stroke="#ffd7de" 
        strokeOpacity={0.65} 
        strokeWidth={1.2} 
        fill="none" 
      />
    </svg>
  );
}

function CounterApp() {
  const [count, setCount] = useState(0);

  const onInc = () => setCount(c => c + 1);
  const onDec = () => setCount(c => c - 1);
  const onReset = () => setCount(0);

  const warning = count < 0 ? (
    <div className="warning" role="alert">
      <WarningIcon />
      <div>Counter cannot be negative!</div>
    </div>
  ) : null;

  return (
    <>
      <div className="counterBox">
        <div className="countBadge" aria-live="polite">
          <span className="countLabel">Current Count</span>
          <span>{count}</span>
        </div>
        <div className="row" style={{ gridColumn: '1 / -1' }}>
          <button 
            className="btn secondary" 
            onClick={onDec} 
            aria-label="Decrement"
          >
            − Decrement
          </button>
          <button 
            className="btn" 
            onClick={onInc} 
            aria-label="Increment"
          >
            + Increment
          </button>
          <button 
            className="btn danger" 
            onClick={onReset} 
            aria-label="Reset to zero"
          >
            Reset
          </button>
        </div>
      </div>
      {warning}
    </>
  );
}

export default CounterApp;