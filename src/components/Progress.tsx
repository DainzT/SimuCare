import React from 'react';
import { TrendingUp, Award, Clock, Target, BookOpen, Star } from 'lucide-react';

export const Progress: React.FC = () => {
  const progressData = {
    totalScenarios: 24,
    completedScenarios: 12,
    averageScore: 85,
    studyHours: 24,
    strongAreas: ['Medication Safety', 'Patient Communication', 'Vital Signs'],
    weakAreas: ['Emergency Response', 'Pain Management'],
  };

  const recentScores = [78, 82, 88, 91, 85, 89, 92];
  const skillProgress = [
    { skill: 'Medication Administration', progress: 85, level: 'Advanced' },
    { skill: 'Patient Assessment', progress: 75, level: 'Intermediate' },
    { skill: 'Emergency Response', progress: 45, level: 'Beginner' },
    { skill: 'Pain Management', progress: 60, level: 'Intermediate' },
    { skill: 'Infection Control', progress: 90, level: 'Advanced' },
    { skill: 'Documentation', progress: 80, level: 'Advanced' },
  ];

  const achievements = [
    { title: 'First Scenario', description: 'Completed your first simulation', earned: true },
    { title: 'Quick Learner', description: 'Scored 90+ on 3 consecutive scenarios', earned: true },
    { title: 'Dedicated Student', description: 'Studied for 20+ hours', earned: true },
    { title: 'Emergency Expert', description: 'Master emergency response scenarios', earned: false },
    { title: 'Perfect Score', description: 'Achieve a 100% score', earned: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Progress</h1>
        <p className="text-gray-600">Track your learning journey and identify areas for improvement.</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completion Rate</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round((progressData.completedScenarios / progressData.totalScenarios) * 100)}%
              </p>
            </div>
            <Target className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${(progressData.completedScenarios / progressData.totalScenarios) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-gray-900">{progressData.averageScore}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Study Hours</p>
              <p className="text-2xl font-bold text-gray-900">{progressData.studyHours}h</p>
            </div>
            <Clock className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Scenarios Done</p>
              <p className="text-2xl font-bold text-gray-900">{progressData.completedScenarios}</p>
            </div>
            <BookOpen className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skill Progress */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Skill Development</h2>
          <div className="space-y-4">
            {skillProgress.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">{skill.skill}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    skill.level === 'Advanced' ? 'bg-green-100 text-green-800' :
                    skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {skill.level}
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      skill.progress >= 80 ? 'bg-green-600' :
                      skill.progress >= 60 ? 'bg-yellow-600' :
                      'bg-red-600'
                    }`}
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">{skill.progress}% mastery</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Performance */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Performance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Last 7 Scenarios</span>
              <span className="text-sm text-green-600 font-medium">↗ Improving</span>
            </div>
            
            <div className="flex items-end space-x-2 h-32">
              {recentScores.map((score, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-blue-600 rounded-t"
                    style={{ height: `${(score / 100) * 100}%` }}
                  ></div>
                  <span className="text-xs text-gray-600 mt-1">{score}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strengths and Weaknesses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Strengths</h2>
          <div className="space-y-2">
            {progressData.strongAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Areas for Improvement</h2>
          <div className="space-y-2">
            {progressData.weakAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                <span className="text-sm text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${
                achievement.earned
                  ? 'border-yellow-300 bg-yellow-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Award className={`h-8 w-8 ${achievement.earned ? 'text-yellow-600' : 'text-gray-400'}`} />
                <div>
                  <h3 className={`font-medium ${achievement.earned ? 'text-yellow-800' : 'text-gray-600'}`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${achievement.earned ? 'text-yellow-700' : 'text-gray-500'}`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};