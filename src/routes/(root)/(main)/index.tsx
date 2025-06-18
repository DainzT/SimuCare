import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Play,
  Star,
  Zap,
  Shield,
  Brain,
} from "lucide-react";

export const Route = createFileRoute("/(root)/(main)/")({
  component: LandingPage,
});

function LandingPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Scenarios",
      description:
        "Generate realistic clinical scenarios from your course materials using advanced AI technology.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Library",
      description:
        "Access hundreds of pre-built clinical scenarios across all nursing specialties.",
    },
    {
      icon: Users,
      title: "Video Practice",
      description:
        "Practice with Tavus AI video agents for realistic patient interactions.",
    },
    {
      icon: Shield,
      title: "Safe Learning Environment",
      description:
        "Make mistakes safely and learn from them without real-world consequences.",
    },
    {
      icon: Zap,
      title: "Real-time Feedback",
      description:
        "Get instant feedback and guidance as you work through clinical scenarios.",
    },
    {
      icon: Award,
      title: "Performance Analytics",
      description:
        "Track your progress with detailed analytics and personalized recommendations.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "BSN Student, Johns Hopkins",
      content:
        "SimuCare has transformed my clinical preparation. The AI feedback is incredibly detailed and helps me identify areas I never knew I needed to work on.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "RN, UCLA Medical Center",
      content:
        "As a new graduate, this platform helped me build confidence before starting my first job. The scenarios are realistic and challenging.",
      rating: 5,
    },
    {
      name: "Dr. Emily Watson",
      role: "Nursing Instructor, Stanford",
      content:
        "I recommend SimuCare to all my students. It bridges the gap between theory and practice beautifully.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "50K+", label: "Students Trained" },
    { number: "500+", label: "Clinical Scenarios" },
    { number: "95%", label: "Pass Rate Improvement" },
    { number: "24/7", label: "Available Practice" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                <Zap className="h-4 w-4" />
                <span>AI-Powered Clinical Training</span>
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 lg:text-6xl">
                Master Nursing Skills with
                <span className="block text-blue-600">Safe Practice</span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                Get the closest thing to real clinical experience through
                AI-powered simulations, evidence-based guidance, and safe
                learning environments designed for nursing students.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link
                  to="/dashboard"
                  className="flex items-center justify-center space-x-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  <Play className="h-5 w-5" />
                  <span>Start Practicing</span>
                </Link>
                <button className="rounded-lg border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-colors hover:border-gray-400">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
                <div className="mb-6 flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="text-sm font-medium text-blue-800">
                      Scenario: Cardiac Emergency Response
                    </p>
                    <p className="mt-1 text-xs text-blue-600">
                      Patient presents with chest pain and shortness of
                      breath...
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-700">
                      Your assessment approach is excellent. Consider
                      checking...
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-700">
                      Real-time feedback provided
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 rounded-full bg-green-500 p-3 text-white">
                <Award className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold text-blue-600 lg:text-4xl">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Everything You Need to Excel
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our comprehensive platform provides all the tools and resources
              you need to master clinical nursing skills safely and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Trusted by Nursing Students Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what students and educators are saying about SimuCare
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-gray-700">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Ready to Transform Your Nursing Education?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Join thousands of nursing students who are already practicing safely
            and building confidence with SimuCare.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center space-x-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-colors hover:bg-gray-100"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-3">
                <div className="rounded-lg bg-blue-600 p-2">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">SimuCare</h3>
                  <p className="text-xs text-gray-400">Clinical Simulation</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Empowering the next generation of nurses through safe,
                AI-powered clinical practice.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Scenarios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 SimuCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
