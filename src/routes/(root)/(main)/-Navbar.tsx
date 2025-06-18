import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-900 hover:text-blue-600"
            >
              <div className="rounded-lg bg-blue-600 p-2">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SimuCare</h1>
                <p className="text-xs text-gray-600">
                  Clinical Simulation Platform
                </p>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/features"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to="/dashboard"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
