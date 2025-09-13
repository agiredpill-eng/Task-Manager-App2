import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';

type Page = 'home' | 'login' | 'signup' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleLogin = () => {
    setCurrentPage('login');
  };

  const handleSignup = () => {
    setCurrentPage('signup');
  };

  const handleDashboard = () => {
    setCurrentPage('dashboard');
  };

  const handleBack = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            onLogin={handleLogin}
            onSignup={handleSignup}
            onDashboard={handleDashboard}
          />
        );
      case 'login':
        return <Login onBack={handleBack} />;
      case 'signup':
        return <div>Signup page coming soon...</div>;
      case 'dashboard':
        return <div>Dashboard coming soon...</div>;
      default:
        return (
          <Home
            onLogin={handleLogin}
            onSignup={handleSignup}
            onDashboard={handleDashboard}
          />
        );
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;