
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kagopalreddy123@gmail.com",
      href: "mailto:kagopalreddy123@gmail.com",
      color: "blue"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: "#",
      color: "green"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "gray"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com",
      color: "blue"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={item.label}
                  className="p-6 border hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => item.href !== '#' && window.open(item.href, '_blank')}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      item.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        item.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.label}</h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-none text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss opportunities, 
              or just want to say hello, I'd love to hear from you.
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <IconComponent className={`w-6 h-6 ${
                      social.color === 'blue' ? 'text-blue-600' : 'text-gray-700'
                    }`} />
                  </a>
                );
              })}
            </div>

            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('mailto:kagopalreddy123@gmail.com', '_blank')}
            >
              Send Me an Email
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
