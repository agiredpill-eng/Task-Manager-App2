import React from 'react';

interface HomeProps {
  onLogin: () => void;
  onSignup: () => void;
  onDashboard: () => void;
}

function Home({ onLogin, onSignup, onDashboard }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-blue-50 via-white to-light-blue-100 font-open-sans">
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Main Content Container */}
        <div className="text-center max-w-4xl w-full">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-12 md:mb-16">
            <span className="bg-gradient-to-r from-light-blue-600 to-light-blue-400 bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="text-gray-700">My Task Manager</span>
          </h1>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center max-w-3xl mx-auto">
            {/* Login Button */}
            <button
              onClick={onLogin}
              className="w-full sm:w-auto px-8 py-4 bg-white text-light-blue-600 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-light-blue-100 hover:border-light-blue-300 min-w-[200px]"
            >
              Login
            </button>

            {/* Signup Button */}
            <button
              onClick={onSignup}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-light-blue-500 to-light-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-light-blue-600 hover:to-light-blue-700 min-w-[200px]"
            >
              Signup
            </button>

            {/* Dashboard Button */}
            <button
              onClick={onDashboard}
              className="w-full sm:w-auto px-8 py-4 bg-white text-light-blue-600 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-light-blue-100 hover:border-light-blue-300 min-w-[200px]"
            >
              Go to Dashboard
            </button>
          </div>

          {/* Decorative Element */}
          <div className="mt-16 md:mt-20">
            <div className="w-24 h-1 bg-gradient-to-r from-light-blue-400 to-light-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-light-blue-200 rounded-full opacity-60 animate-pulse hidden lg:block"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-light-blue-300 rounded-full opacity-40 animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-light-blue-400 rounded-full opacity-50 animate-pulse hidden lg:block" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-light-blue-200 rounded-full opacity-60 animate-pulse hidden lg:block" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
}

export default Home;