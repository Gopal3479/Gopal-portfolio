
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const achievements = [
    "Developed and maintained enterprise-grade web applications using C# and ASP.NET",
    "Built responsive and interactive front-end components with React.js, HTML5, CSS, and JavaScript",
    "Integrated Azure cloud services for application hosting and data storage",
    "Collaborated in an Agile team using Git and GitHub for version control",
    "Optimized existing codebases by refactoring and writing unit tests"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Associate Software Engineer
                </h3>
                <div className="flex items-center space-x-2 text-blue-600 font-semibold text-lg mb-3">
                  <Briefcase className="w-5 h-5" />
                  <span>Fidelity National Financial</span>
                </div>
              </div>
              
              <div className="flex flex-col lg:items-end space-y-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">1 year 6 months (Jul 2022 – Dec 2023)</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Bengaluru, India</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities & Achievements:</h4>
              
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {['C#', 'ASP.NET', 'React.js', 'JavaScript', 'HTML5', 'CSS', 'Azure', 'Git', 'GitHub'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
              <div className="text-lg text-gray-700">
                <strong>Bachelor of Engineering in Computer Science</strong>
              </div>
              <div className="text-gray-600 mt-1">Dayananda Sagar University, Bangalore</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
