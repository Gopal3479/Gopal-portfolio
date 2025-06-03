
import { Github, ExternalLink, Brain, Cloud } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Breast Cancer Detection Using Machine Learning",
      description: "Developed a predictive model to classify breast cancer tumors as benign or malignant using advanced machine learning algorithms.",
      longDescription: "Leveraged Python libraries such as scikit-learn and TensorFlow to preprocess the Breast Cancer Wisconsin dataset and train machine learning algorithms including Random Forest and Neural Networks. The model achieved high accuracy and demonstrates potential for assisting doctors in early diagnosis.",
      technologies: ["Python", "scikit-learn", "TensorFlow", "Machine Learning", "Neural Networks", "Random Forest"],
      icon: Brain,
      color: "pink",
      featured: true
    },
    {
      title: "Cloud and IoT Based Health Care Monitoring System",
      description: "Designed and implemented an IoT-enabled healthcare monitoring solution with real-time data processing and visualization.",
      longDescription: "Collected patient data (heart rate, temperature) using IoT sensors and microcontrollers, then transmitted it to Azure IoT Hub for processing. Developed a cloud-based backend and real-time dashboard using Azure services to store and visualize data. This system enables remote health monitoring and timely alerts for patients and healthcare providers.",
      technologies: ["Azure IoT Hub", "IoT Sensors", "Microcontrollers", "Real-time Dashboard", "Cloud Computing", "Azure Services"],
      icon: Cloud,
      color: "blue",
      featured: true
    }
  ];

  const getColorClasses = (color: string, featured: boolean = false) => {
    const colorMap = {
      pink: featured ? "border-pink-300 bg-gradient-to-br from-pink-50 to-red-50" : "border-pink-200 bg-pink-50",
      blue: featured ? "border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50" : "border-blue-200 bg-blue-50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      pink: "text-pink-600",
      blue: "text-blue-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative solutions at the intersection of AI, cloud computing, and healthcare technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className={`p-8 border-2 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] ${getColorClasses(project.color, project.featured)}`}
              >
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg ${project.color === 'pink' ? 'bg-pink-100' : 'bg-blue-100'}`}>
                      <IconComponent className={`w-8 h-8 ${getIconColor(project.color)}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {project.longDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.color === 'pink' 
                            ? 'bg-pink-200 text-pink-800' 
                            : 'bg-blue-200 text-blue-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center space-x-2 hover:bg-gray-50"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center space-x-2 hover:bg-gray-50"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
