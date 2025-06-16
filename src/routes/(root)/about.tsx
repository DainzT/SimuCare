import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  Activity, 
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
  TrendingUp
} from 'lucide-react'

export const Route = createFileRoute('/(root)/about')({
  component: AboutPage,
})

function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We believe in preparing nurses who prioritize compassionate, evidence-based patient care above all else.'
    },
    {
      icon: Shield,
      title: 'Safe Learning',
      description: 'Creating risk-free environments where students can learn from mistakes without real-world consequences.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation in Education',
      description: 'Leveraging cutting-edge AI technology to revolutionize how nursing skills are taught and practiced.'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Fostering a community where students, educators, and professionals learn together.'
    }
  ]

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Medical Officer',
      background: 'Former Chief Nursing Officer at Johns Hopkins, 20+ years in clinical practice',
      image: 'SM'
    },
    {
      name: 'Alex Chen',
      role: 'Chief Technology Officer',
      background: 'Former Google AI researcher, specializing in healthcare applications',
      image: 'AC'
    },
    {
      name: 'Prof. Maria Rodriguez',
      role: 'Head of Education',
      background: 'Nursing education expert from Stanford School of Medicine',
      image: 'MR'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Clinical Advisor',
      background: 'Emergency medicine physician and simulation training pioneer',
      image: 'JW'
    }
  ]

  const milestones = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'Started with a vision to transform nursing education through AI'
    },
    {
      year: '2023',
      title: 'First AI Scenarios',
      description: 'Launched our first AI-generated clinical scenarios'
    },
    {
      year: '2024',
      title: 'Video Integration',
      description: 'Integrated Tavus AI video agents for immersive practice'
    },
    {
      year: '2024',
      title: '50,000+ Students',
      description: 'Reached milestone of serving over 50,000 nursing students'
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Students Served', icon: Users },
    { number: '200+', label: 'Partner Schools', icon: BookOpen },
    { number: '95%', label: 'Student Satisfaction', icon: Star },
    { number: '40+', label: 'Countries Reached', icon: Globe }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">NurseSim Pro</h1>
                <p className="text-xs text-gray-600">Clinical Simulation Platform</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/features" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Features
              </Link>
              <Link to="/about" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link 
                to="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transforming Nursing Education
              <span className="text-blue-600 block">Through Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to bridge the gap between nursing theory and practice, 
              empowering the next generation of healthcare professionals with safe, 
              realistic, and effective clinical training.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <Target className="h-16 w-16 mx-auto mb-6 text-blue-100" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              To revolutionize nursing education by providing the most advanced, safe, and effective 
              clinical simulation platform that bridges the gap between classroom learning and real-world 
              patient care, ultimately improving healthcare outcomes worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference in nursing education worldwide</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform nursing education
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Healthcare and technology experts dedicated to nursing education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{member.image}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-600">
              Honored for our contribution to healthcare education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">EdTech Innovation Award</h3>
              <p className="text-gray-600">2024 Healthcare Education Technology</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Company Most Innovative</h3>
              <p className="text-gray-600">Healthcare Companies 2024</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <Star className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nursing Excellence Award</h3>
              <p className="text-gray-600">American Nurses Association 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the future of nursing education. Start your journey with NurseSim Pro today.
          </p>
          <Link 
            to="/dashboard"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
