import React, { useState } from 'react';
import { AppState } from './types';
import { AuthScreen } from './components/AuthScreen';
import BootSequence from './components/BootSequence';
import Dashboard from './components/Dashboard';
import { AnimatePresence } from 'framer-motion';

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
      <AnimatePresence mode="wait">
        {appState === AppState.LOCKED && (
          <AuthScreen onAuthenticated={handleUnlock} key="auth" />
        )}
        
        {appState === AppState.LOADING && (
          <BootSequence onComplete={handleLoadingComplete} key="boot" />
        )}
        
        {appState === AppState.ACTIVE && (
          <Dashboard key="dashboard" />
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;