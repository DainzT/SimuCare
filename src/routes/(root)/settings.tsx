import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(root)/settings')({
  component: SettingsPage,
})

function SettingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Customize your learning experience and account preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nursing Program</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Select your program</option>
                <option>BSN - Bachelor of Science in Nursing</option>
                <option>ADN - Associate Degree in Nursing</option>
                <option>MSN - Master of Science in Nursing</option>
                <option>RN to BSN</option>
              </select>
            </div>
          </div>
        </div>

        {/* Learning Preferences */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Learning Preferences</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Difficulty</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Mixed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Focus Areas</label>
              <div className="space-y-2">
                {['Medical-Surgical', 'Pediatrics', 'Critical Care', 'Geriatrics', 'Emergency', 'Mental Health'].map((area) => (
                  <label key={area} className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">{area}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Notifications</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Email notifications</span>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Study reminders</span>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Progress updates</span>
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            </label>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Account</h2>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-700 transition-colors duration-200">
              Save Changes
            </button>
            <button className="w-full bg-gray-100 text-gray-700 rounded-lg px-4 py-2 font-medium hover:bg-gray-200 transition-colors duration-200">
              Export Progress Data
            </button>
            <button className="w-full bg-red-100 text-red-700 rounded-lg px-4 py-2 font-medium hover:bg-red-200 transition-colors duration-200">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}