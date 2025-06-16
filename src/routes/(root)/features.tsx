import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  Activity, 
  Brain, 
  BookOpen, 
  Users, 
  Shield, 
  Zap, 
  Award, 
  MessageSquare,
  Video,
  FileText,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Globe,
  Headphones
} from 'lucide-react'

export const Route = createFileRoute('/(root)/features')({
  component: FeaturesPage,
})

function FeaturesPage() {
  const coreFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Scenario Generation',
      description: 'Upload your course materials and let our advanced AI create personalized clinical scenarios tailored to your learning objectives.',
      benefits: [
        'Generate scenarios from PDFs, videos, and text',
        'Customizable difficulty levels',
        'Evidence-based clinical situations',
        'Instant scenario creation'
      ]
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Scenario Library',
      description: 'Access hundreds of pre-built clinical scenarios across all nursing specialties, created by experienced educators.',
      benefits: [
        '500+ clinical scenarios',
        'All nursing specialties covered',
        'Regular content updates',
        'Peer-reviewed scenarios'
      ]
    },
    {
      icon: Users,
      title: 'Tavus Video Agent Integration',
      description: 'Practice with realistic AI video agents that simulate patient interactions for immersive learning experiences.',
      benefits: [
        'Lifelike patient interactions',
        'Voice and video responses',
        'Emotional intelligence simulation',
        'Multi-language support'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Real-Time AI Feedback',
      description: 'Get instant, contextual feedback as you work through scenarios, helping you learn and improve in real-time.',
      benefits: [
        'Immediate error correction',
        'Positive reinforcement',
        'Learning path suggestions',
        'Adaptive difficulty adjustment'
      ]
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track your progress with detailed performance analytics and personalized recommendations for improvement.',
      benefits: [
        'Detailed performance metrics',
        'Progress tracking over time',
        'Weakness identification',
        'Personalized study plans'
      ]
    },
    {
      icon: Shield,
      title: 'Safe Learning Environment',
      description: 'Make mistakes safely without real-world consequences while building confidence and competence.',
      benefits: [
        'Risk-free practice',
        'Unlimited attempts',
        'Mistake-based learning',
        'Confidence building'
      ]
    }
  ]

  const additionalFeatures = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Practice anytime, anywhere with our cloud-based platform'
    },
    {
      icon: Target,
      title: 'Competency Mapping',
      description: 'Align scenarios with nursing competency standards'
    },
    {
      icon: Globe,
      title: 'Multi-Device Access',
      description: 'Seamless experience across desktop, tablet, and mobile'
    },
    {
      icon: Headphones,
      title: 'Audio Integration',
      description: 'Practice with realistic patient sounds and communications'
    },
    {
      icon: FileText,
      title: 'Documentation Practice',
      description: 'Learn proper clinical documentation within scenarios'
    },
    {
      icon: Award,
      title: 'Achievement System',
      description: 'Earn badges and certificates as you master skills'
    }
  ]

  const workflows = [
    {
      step: 1,
      title: 'Upload Materials',
      description: 'Upload your course PDFs, videos, or describe your learning objectives',
      icon: FileText
    },
    {
      step: 2,
      title: 'AI Generation',
      description: 'Our AI analyzes your materials and creates personalized scenarios',
      icon: Sparkles
    },
    {
      step: 3,
      title: 'Interactive Practice',
      description: 'Engage with realistic scenarios using text, voice, and video',
      icon: Video
    },
    {
      step: 4,
      title: 'Real-Time Feedback',
      description: 'Receive instant guidance and corrections as you practice',
      icon: MessageSquare
    },
    {
      step: 5,
      title: 'Performance Analysis',
      description: 'Review detailed analytics and get personalized improvement plans',
      icon: BarChart3
    }
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
              <Link to="/features" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                Features
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            <span>Advanced Clinical Training Features</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Master
            <span className="text-blue-600 block">Clinical Nursing Skills</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the comprehensive suite of features designed to provide the most realistic 
            and effective clinical training experience for nursing students.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools designed specifically for nursing education
            </p>
          </div>
          
          <div className="space-y-20">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <feature.icon className="h-24 w-24 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple workflow from course materials to mastery
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2 hidden lg:block"></div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {workflows.map((workflow, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center relative z-10">
                    <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <workflow.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {workflow.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{workflow.title}</h3>
                    <p className="text-sm text-gray-600">{workflow.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Features
            </h2>
            <p className="text-xl text-gray-600">
              More tools to enhance your learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start practicing with our comprehensive clinical simulation platform today.
          </p>
          <Link 
            to="/dashboard"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
