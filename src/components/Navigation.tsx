import React from "react";
import { Link, linkOptions, useRouterState } from "@tanstack/react-router";
import {
  Home,
  BookOpen,
  Upload,
  BarChart3,
  Settings,
  Activity,
} from "lucide-react";

export const Navigation: React.FC = () => {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navigationLinks = linkOptions([
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      to: "/dashboard/scenarios",
      label: "Scenarios",
      icon: BookOpen,
    },
    { to: "/dashboard/upload", label: "Upload Materials", icon: Upload },
    {
      to: "/dashboard/progress",
      label: "Progress",
      icon: BarChart3,
    },
    {
      to: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
    },
  ]);

  return (
    <nav className="border-b border-gray-200 bg-white shadow-lg py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 transition-opacity duration-200 hover:opacity-80"
          >
            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-blue-600 p-2">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SimuCare</h1>
              </div>
            </div>
          </Link>

          <div className="flex space-x-8">
            {navigationLinks.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
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
