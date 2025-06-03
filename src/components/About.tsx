
import { Award, Code, User, MapPin, Calendar, Heart, Target, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    { icon: Calendar, title: "2+ Years", subtitle: "Professional Experience", color: "blue" },
    { icon: MapPin, title: "Bengaluru", subtitle: "Based in Tech Hub", color: "green" },
    { icon: BookOpen, title: "B.E. CSE", subtitle: "Dayananda Sagar University", color: "purple" },
    { icon: Target, title: "AI & Cloud", subtitle: "Specialization Focus", color: "orange" }
  ];

  const interests = [
    { icon: "🎬", title: "Movies", desc: "Cinephile who loves exploring different genres" },
    { icon: "🏔️", title: "Trekking", desc: "Adventure seeker exploring nature's beauty" },
    { icon: "🏏", title: "Cricket", desc: "Sports enthusiast and team player" }
  ];

  const languages = ['English', 'Kannada', 'Telugu'];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate software engineer crafting innovative solutions at the intersection of 
            <span className="font-semibold text-blue-600"> AI and cloud computing</span>
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${item.color}-100 flex items-center justify-center`}>
                <item.icon className={`w-6 h-6 text-${item.color}-600`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.subtitle}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-6 h-6 text-blue-600 mr-3" />
                My Journey
              </h3>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Based in the vibrant tech hub of <span className="font-semibold text-gray-800">Bengaluru, India</span>, 
                  I bring nearly two years of hands-on experience in full-stack development and machine learning. 
                  My journey began with a Bachelor of Engineering in Computer Science from Dayananda Sagar University.
                </p>
                
                <p>
                  At <span className="font-semibold text-gray-800">Fidelity National Financial</span>, I honed my skills 
                  developing scalable web applications and innovative cloud-based solutions. This experience taught me 
                  the importance of building robust, enterprise-grade systems that can handle real-world challenges.
                </p>
                
                <p>
                  I'm deeply passionate about leveraging cutting-edge technology to solve meaningful problems, 
                  particularly in <span className="font-semibold text-blue-600">healthcare and beyond</span>. 
                  My goal is to continue growing as a developer while building innovative solutions that make a 
                  positive impact on society.
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Heart className="w-5 h-5 text-red-500 mr-3" />
                Languages I Speak
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((language) => (
                  <span 
                    key={language}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Interests */}
          <div className="space-y-8">
            {/* Core Strengths */}
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Excellence</h3>
                    <p className="text-gray-600">
                      Specialized in full-stack development with expertise in modern frameworks, 
                      cloud technologies, and cutting-edge machine learning algorithms.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-600 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                    <p className="text-gray-600">
                      Committed to staying at the forefront of technology through continuous 
                      learning and professional certifications from top institutions.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Personal Interests */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">When I'm Not Coding</h3>
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-2xl">{interest.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{interest.title}</h4>
                      <p className="text-sm text-gray-600">{interest.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to collaborate on innovative projects that push the boundaries of technology.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
