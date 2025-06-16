import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Search, Clock, Play } from 'lucide-react';
import { scenarios } from '../data/scenarios';

export const ScenarioLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const specialties = ['All', ...Array.from(new Set(scenarios.map(s => s.specialty)))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredScenarios = scenarios.filter(scenario => {
    const matchesSearch = scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scenario.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scenario.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialty = selectedSpecialty === 'All' || scenario.specialty === selectedSpecialty;
    const matchesDifficulty = selectedDifficulty === 'All' || scenario.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesSpecialty && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Scenario Library</h1>
        <p className="text-gray-600">Choose from our comprehensive collection of nursing simulation scenarios.</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search scenarios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>
          
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScenarios.map((scenario) => (
          <div key={scenario.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{scenario.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(scenario.difficulty)}`}>
                  {scenario.difficulty}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{scenario.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-blue-600">{scenario.specialty}</span>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{scenario.duration} min</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {scenario.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    {tag}
                  </span>
                ))}
                {scenario.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    +{scenario.tags.length - 3} more
                  </span>
                )}
              </div>
              
              <Link
                to="/simulation/$scenarioId"
                params={{ scenarioId: scenario.id }}
                className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Start Scenario</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredScenarios.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No scenarios match your search criteria.</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
};
