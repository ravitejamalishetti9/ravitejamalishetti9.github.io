import React from 'react';
import { 
  ArrowRight, 
  Users, 
  Clock, 
  Target, 
  Code, 
  Smartphone, 
  Monitor, 
  TrendingUp,
  CheckCircle,
  ExternalLink,
  Github,
  Figma,
  Zap,
  Shield,
  BarChart3
} from 'lucide-react';

function App() {
  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Supabase', category: 'Backend-as-a-Service' }
  ];

  const features = [
    { icon: Target, title: 'Smart Task Prioritization', desc: 'AI-powered task ranking based on deadlines and importance' },
    { icon: Users, title: 'Team Collaboration', desc: 'Real-time collaboration with team members and stakeholders' },
    { icon: Clock, title: 'Time Tracking', desc: 'Built-in time tracking with detailed analytics and reporting' },
    { icon: BarChart3, title: 'Progress Analytics', desc: 'Comprehensive dashboards showing productivity insights' }
  ];

  const metrics = [
    { label: 'User Satisfaction', value: '94%', change: '+12%' },
    { label: 'Task Completion Rate', value: '87%', change: '+23%' },
    { label: 'Team Productivity', value: '+34%', change: '+34%' },
    { label: 'Daily Active Users', value: '2.1K', change: '+156%' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-gray-900">Alex Chen</div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Work</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Featured Project
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              TaskFlow
              <span className="block text-3xl text-gray-600 font-normal mt-2">
                Intelligent Project Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A modern task management platform that combines intuitive design with AI-powered insights to help teams achieve 34% higher productivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </button>
              <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                <Github className="w-5 h-5" />
                Source Code
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div className="text-sm text-gray-600">Design system implementation</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                    <div className="text-sm text-gray-400">API integration testing</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                    <div className="text-sm text-gray-400">User acceptance testing</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="text-blue-600 font-medium">67%</span>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">3 months</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Team Size</h3>
              <p className="text-gray-600">4 members</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">My Role</h3>
              <p className="text-gray-600">Lead Developer & UX Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Remote teams were struggling with fragmented task management tools, leading to decreased productivity and poor collaboration. Traditional tools lacked intelligent prioritization and real-time insights.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scattered Information</h4>
                    <p className="text-gray-600">Teams used 5+ different tools, causing context switching and information silos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Poor Prioritization</h4>
                    <p className="text-gray-600">No intelligent way to prioritize tasks based on impact and urgency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Limited Insights</h4>
                    <p className="text-gray-600">Lack of actionable analytics to improve team performance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-red-500 mb-2">73%</div>
                <p className="text-gray-700 mb-6">of remote teams report decreased productivity due to poor task management</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">5.2</div>
                    <div className="text-sm text-gray-600">Tools per team</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">2.3h</div>
                    <div className="text-sm text-gray-600">Daily context switching</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TaskFlow combines intuitive task management with AI-powered insights and seamless team collaboration in one unified platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Design Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Research</h3>
              <p className="text-gray-600 text-sm">User interviews, competitive analysis, and market research</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ideation</h3>
              <p className="text-gray-600 text-sm">Brainstorming sessions and concept development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Prototype</h3>
              <p className="text-gray-600 text-sm">Wireframes, mockups, and interactive prototypes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Test & Iterate</h3>
              <p className="text-gray-600 text-sm">User testing and continuous improvement</p>
            </div>
          </div>

          <div className="mt-16 bg-gray-100 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Figma className="w-8 h-8 text-gray-700" />
              <h3 className="text-2xl font-semibold text-gray-900">Design System</h3>
            </div>
            <p className="text-gray-600 mb-8">
              Created a comprehensive design system with reusable components, consistent typography, and accessible color palettes to ensure design consistency across the platform.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Colors</h4>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                  <div className="w-8 h-8 bg-green-500 rounded"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded"></div>
                  <div className="w-8 h-8 bg-gray-900 rounded"></div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Typography</h4>
                <div className="space-y-1">
                  <div className="text-lg font-bold">Heading Bold</div>
                  <div className="text-base">Body Regular</div>
                  <div className="text-sm text-gray-600">Caption Light</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Components</h4>
                <div className="space-y-2">
                  <div className="h-2 bg-blue-200 rounded"></div>
                  <div className="h-2 bg-green-200 rounded w-3/4"></div>
                  <div className="h-2 bg-purple-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Technical Implementation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with modern technologies focusing on performance, scalability, and developer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Monitor className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <p className="text-gray-300">React with TypeScript for type safety and better developer experience</p>
            </div>
            <div className="text-center">
              <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <p className="text-gray-300">Node.js with Express and PostgreSQL for robust data management</p>
            </div>
            <div className="text-center">
              <Smartphone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile-First</h3>
              <p className="text-gray-300">Responsive design with progressive web app capabilities</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Technology Stack</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div>
                    <div className="font-medium">{tech.name}</div>
                    <div className="text-sm text-gray-400">{tech.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The platform exceeded expectations, delivering significant improvements in team productivity and user satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600 mb-2">{metric.label}</div>
                <div className="flex items-center justify-center gap-1 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-2xl p-8 text-center">
            <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">User testimonial</h3>
            <blockquote className="text-lg text-gray-700 italic mb-6 max-w-3xl mx-auto">
              "TaskFlow transformed how our remote team collaborates. The AI prioritization feature alone saved us 2 hours per day, and the real-time collaboration tools keep everyone aligned."
            </blockquote>
            <cite className="text-gray-600 font-medium">Sarah Johnson, Product Manager at TechCorp</cite>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Next?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Based on user feedback and market research, we're planning several exciting features for the next iteration.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">AI Assistant</h3>
              <p className="text-gray-600 text-sm">Intelligent task suggestions and automated workflow optimization</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600 text-sm">Deeper insights into team performance and productivity trends</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Integrations</h3>
              <p className="text-gray-600 text-sm">Connect with popular tools like Slack, GitHub, and Google Workspace</p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View More Projects
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-gray-300 mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Contact Me
          </button>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
            © 2024 Alex Chen. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;