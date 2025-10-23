import { useState, useEffect } from 'react';
import { LoginPage } from './components/LoginPage';
import { AssessmentForm } from './components/AssessmentForm';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultsDashboard } from './components/ResultsDashboard';
import { AssessmentResponse, ScoreResult } from './types/assessment';
import { calculateScore } from './utils/scoring';

type AppState =  'login' | 'assessment' | 'loading' | 'results';

export default function App() {
  const [appState, setAppState] = useState<AppState>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [assessmentResponses, setAssessmentResponses] = useState<AssessmentResponse | null>(null);
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Mock authentication - in production, this would validate credentials
    setIsAuthenticated(true);
    setAppState('login');
  };

  const handleStartAssessment = () => {
    setAppState('assessment');
  };

  const handleCompleteAssessment = (responses: AssessmentResponse) => {
    setAssessmentResponses(responses);
    setAppState('loading');
    
    // Show loading screen for 3 seconds
    setTimeout(() => {
      const score = calculateScore(responses);
      setScoreResult(score);
      setAppState('results');
    }, 3000);
  };

  const handleRestart = () => {
    setAssessmentResponses(null);
    setScoreResult(null);
    setAppState('login');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAssessmentResponses(null);
    setScoreResult(null);
    setAppState('login');
  };

  return (
    <>
      {appState === 'login' && <LoginPage onLogin={handleLogin} />}
      {appState === 'login' && <LoginPage onStart={handleStartAssessment} />}
      {appState === 'assessment' && <AssessmentForm onComplete={handleCompleteAssessment} />}
      {appState === 'loading' && <LoadingScreen />}
      {appState === 'results' && assessmentResponses && scoreResult && (
        <ResultsDashboard
          score={scoreResult}
          responses={assessmentResponses}
          onRestart={handleRestart}
          onLogout={handleLogout}
        />
      )}
    </>
  );
}
