import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Users,
  Award,
  Target,
  BookOpen,
  Lightbulb,
  Shield,
  ArrowRight,
  Star,
  Globe,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/(root)/(main)/about")({
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "We believe in preparing nurses who prioritize compassionate, evidence-based patient care above all else.",
    },
    {
      icon: Shield,
      title: "Safe Learning",
      description:
        "Creating risk-free environments where students can learn from mistakes without real-world consequences.",
    },
    {
      icon: Lightbulb,
      title: "Innovation in Education",
      description:
        "Leveraging cutting-edge AI technology to revolutionize how nursing skills are taught and practiced.",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description:
        "Fostering a community where students, educators, and professionals learn together.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Medical Officer",
      background:
        "Former Chief Nursing Officer at Johns Hopkins, 20+ years in clinical practice",
      image: "SM",
    },
    {
      name: "Alex Chen",
      role: "Chief Technology Officer",
      background:
        "Former Google AI researcher, specializing in healthcare applications",
      image: "AC",
    },
    {
      name: "Prof. Maria Rodriguez",
      role: "Head of Education",
      background: "Nursing education expert from Stanford School of Medicine",
      image: "MR",
    },
    {
      name: "Dr. James Wilson",
      role: "Clinical Advisor",
      background:
        "Emergency medicine physician and simulation training pioneer",
      image: "JW",
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description:
        "Started with a vision to transform nursing education through AI",
    },
    {
      year: "2023",
      title: "First AI Scenarios",
      description: "Launched our first AI-generated clinical scenarios",
    },
    {
      year: "2024",
      title: "Video Integration",
      description: "Integrated Tavus AI video agents for immersive practice",
    },
    {
      year: "2024",
      title: "50,000+ Students",
      description: "Reached milestone of serving over 50,000 nursing students",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Students Served", icon: Users },
    { number: "200+", label: "Partner Schools", icon: BookOpen },
    { number: "95%", label: "Student Satisfaction", icon: Star },
    { number: "40+", label: "Countries Reached", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Transforming Nursing Education
              <span className="block text-blue-600">Through Innovation</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We're on a mission to bridge the gap between nursing theory and
              practice, empowering the next generation of healthcare
              professionals with safe, realistic, and effective clinical
              training.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-600 p-12 text-center text-white">
            <Target className="mx-auto mb-6 h-16 w-16 text-blue-100" />
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-blue-100">
              To revolutionize nursing education by providing the most advanced,
              safe, and effective clinical simulation platform that bridges the
              gap between classroom learning and real-world patient care,
              ultimately improving healthcare outcomes worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Making a difference in nursing education worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <stat.icon className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                <div className="mb-2 text-3xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform nursing education
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}
                  >
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                      <div className="mb-2 text-lg font-bold text-blue-600">
                        {milestone.year}
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="h-4 w-4 rounded-full border-4 border-white bg-blue-600 shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Healthcare and technology experts dedicated to nursing education
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
                  <span className="text-lg font-bold text-white">
                    {member.image}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="mb-3 font-medium text-blue-600">{member.role}</p>
                <p className="text-sm text-gray-600">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-600">
              Honored for our contribution to healthcare education
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <Award className="mx-auto mb-4 h-12 w-12 text-yellow-500" />
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                EdTech Innovation Award
              </h3>
              <p className="text-gray-600">
                2024 Healthcare Education Technology
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <TrendingUp className="mx-auto mb-4 h-12 w-12 text-green-500" />
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Fast Company Most Innovative
              </h3>
              <p className="text-gray-600">Healthcare Companies 2024</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <Star className="mx-auto mb-4 h-12 w-12 text-blue-500" />
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Nursing Excellence Award
              </h3>
              <p className="text-gray-600">American Nurses Association 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Join Our Mission
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Be part of the future of nursing education. Start your journey with
            SimuCare today.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center space-x-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-colors hover:bg-gray-100"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
