
import { Award, Code, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I am a passionate software engineer with nearly two years of experience in full-stack development 
                and machine learning, based in the vibrant tech hub of Bengaluru, India. I hold a Bachelor of 
                Engineering degree in Computer Science from Dayananda Sagar University.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My professional journey includes hands-on experience at Fidelity National Financial, where I 
                developed scalable web applications and innovative cloud-based solutions. I am deeply passionate 
                about leveraging cutting-edge technology to solve real-world problems, particularly in healthcare 
                and beyond.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My goal is to continue growing as a developer, building innovative solutions at the intersection 
                of AI and cloud computing, while contributing to meaningful projects that make a positive impact 
                on society.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages I Speak</h3>
                <div className="flex flex-wrap gap-3">
                  {['English', 'Kannada', 'Telugu'].map((language) => (
                    <span 
                      key={language}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Expertise</h3>
                  <p className="text-gray-600">
                    Specialized in full-stack development with expertise in modern frameworks, 
                    cloud technologies, and machine learning algorithms.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">
                    Committed to staying updated with the latest technologies through continuous 
                    learning and professional certifications from top institutions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Interests</h3>
                  <p className="text-gray-600">
                    When I'm not coding, I enjoy watching movies, trekking through nature, 
                    and playing cricket with friends.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
