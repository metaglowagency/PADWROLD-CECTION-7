import React, { useState } from 'react';
import { AppState } from './types';
import AccessGate from './components/AccessGate';
import LoadingSequence from './components/LoadingSequence';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LOCKED);

  const handleUnlock = () => {
    setAppState(AppState.LOADING);
  };

  const handleLoadingComplete = () => {
    setAppState(AppState.ACTIVE);
  };

  return (
    <main className="w-full h-full">
      {appState === AppState.LOCKED && (
        <AccessGate onUnlock={handleUnlock} />
      )}
      
      {appState === AppState.LOADING && (
        <LoadingSequence onComplete={handleLoadingComplete} />
      )}
      
      {appState === AppState.ACTIVE && (
        <Dashboard />
      )}
    </main>
  );
};

export default App;
