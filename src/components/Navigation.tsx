import React from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Home, BookOpen, Upload, BarChart3, Settings, Heart } from 'lucide-react';

export const Navigation: React.FC = () => {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navItems = [
    { id: '/', label: 'Dashboard', icon: Home },
    { id: '/scenarios', label: 'Scenarios', icon: BookOpen },
    { id: '/upload', label: 'Upload Materials', icon: Upload },
    { id: '/progress', label: 'Progress', icon: BarChart3 },
    { id: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">NurseSimulate</span>
          </Link>
          
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.id;
              
              return (
                <Link
                  key={item.id}
                  to={item.id}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};