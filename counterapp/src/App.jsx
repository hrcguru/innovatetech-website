import React from 'react';
import CounterApp from './components/CounterApp';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 flex items-center justify-center p-6 font-display">
      <div className="w-full max-w-md">
        <CounterApp />
      </div>
    </div>
  );
}

export default App;