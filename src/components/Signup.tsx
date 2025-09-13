import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface SignupProps {
  onBack: () => void;
}

function Signup({ onBack }: SignupProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt:', { name, email, password });
    // Add signup logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-blue-50 via-white to-light-blue-100 font-open-sans">
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-8 left-8 flex items-center gap-2 text-light-blue-600 hover:text-light-blue-700 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Home</span>
        </button>

        {/* Main Content Container */}
        <div className="w-full max-w-md">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-light-blue-600 to-light-blue-400 bg-clip-text text-transparent">
              Create Account
            </span>
          </h1>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="space-y-3">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-4 text-lg border-2 border-light-blue-100 rounded-xl focus:border-light-blue-400 focus:outline-none transition-colors duration-200 bg-white shadow-sm"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-3">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-4 text-lg border-2 border-light-blue-100 rounded-xl focus:border-light-blue-400 focus:outline-none transition-colors duration-200 bg-white shadow-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-3">
              <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-4 text-lg border-2 border-light-blue-100 rounded-xl focus:border-light-blue-400 focus:outline-none transition-colors duration-200 bg-white shadow-sm"
                placeholder="Create a password"
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-light-blue-500 to-light-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-light-blue-600 hover:to-light-blue-700 mt-8"
            >
              Signup
            </button>
          </form>

          {/* Decorative Element */}
          <div className="mt-12">
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

export default Signup;