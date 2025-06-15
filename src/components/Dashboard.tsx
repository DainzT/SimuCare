import React from 'react';
import { Link } from '@tanstack/react-router';
import { Play, Clock, Award, TrendingUp, BookOpen, Users } from 'lucide-react';
import { scenarios } from '../data/scenarios';

export const Dashboard: React.FC = () => {
  const recentScenarios = scenarios.slice(0, 3);
  
  const stats = [
    { label: 'Scenarios Completed', value: '12', icon: Award, color: 'text-green-600 bg-green-100' },
    { label: 'Average Score', value: '85%', icon: TrendingUp, color: 'text-blue-600 bg-blue-100' },
    { label: 'Study Hours', value: '24h', icon: Clock, color: 'text-purple-600 bg-purple-100' },
    { label: 'Skill Areas', value: '8', icon: BookOpen, color: 'text-orange-600 bg-orange-100' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
        <p className="text-gray-600">Continue your nursing education journey with interactive simulations.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Start */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Start</h2>
          <div className="space-y-4">
            <Link
              to="/scenarios"
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Browse All Scenarios</span>
            </Link>
            <button className="w-full bg-gray-100 text-gray-700 rounded-lg px-4 py-3 font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Join Study Group</span>
            </button>
          </div>
        </div>

        {/* Recent Scenarios */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Continue Learning</h2>
          <div className="space-y-3">
            {recentScenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{scenario.title}</h3>
                  <p className="text-sm text-gray-600">{scenario.specialty} • {scenario.duration} min</p>
                </div>
                <Link
                  to="/simulation/$scenarioId"
                  params={{ scenarioId: scenario.id }}
                  className="bg-blue-600 text-white rounded-lg px-3 py-1 text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Start
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Recommended Learning Path</h2>
        <p className="text-gray-600 mb-4">
          Based on your progress, we recommend focusing on these areas to improve your nursing skills.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Pain Management', 'Medication Safety', 'Patient Communication', 'Emergency Response'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};