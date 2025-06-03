
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Java", "C#", "JavaScript"],
      color: "blue"
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React.js", "HTML5", "CSS", "JavaScript"],
      color: "purple"
    },
    {
      title: "Backend & Frameworks",
      icon: "⚙️",
      skills: ["ASP.NET", ".NET Framework", "RESTful APIs"],
      color: "green"
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["Microsoft Azure", "Azure App Services", "Azure SQL", "Git", "GitHub"],
      color: "orange"
    },
    {
      title: "Data Science & AI",
      icon: "🤖",
      skills: ["Machine Learning", "Deep Learning", "TensorFlow", "scikit-learn"],
      color: "red"
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Agile Methodology", "Unit Testing"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 hover:border-blue-400 bg-blue-50",
      purple: "border-purple-200 hover:border-purple-400 bg-purple-50",
      green: "border-green-200 hover:border-green-400 bg-green-50",
      orange: "border-orange-200 hover:border-orange-400 bg-orange-50",
      red: "border-red-200 hover:border-red-400 bg-red-50",
      indigo: "border-indigo-200 hover:border-indigo-400 bg-indigo-50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`p-6 border-2 transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${getColorClasses(category.color)}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-between bg-white/50 rounded-lg p-3 transition-all duration-200 hover:bg-white/80"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Machine Learning (Stanford University - Andrew Ng)",
              "Programming for Everybody: Getting Started with Python (University of Michigan)",
              "Learn to Code in Python 3: Programming Beginner to Advanced"
            ].map((cert, index) => (
              <Card key={index} className="p-4 bg-white border hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-700 text-sm font-medium">{cert}</p>
                <div className="mt-2 text-xs text-blue-600 font-semibold">Coursera</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
