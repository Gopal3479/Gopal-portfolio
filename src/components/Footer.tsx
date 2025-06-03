
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">
              Gopal<span className="text-blue-400">.</span>
            </h3>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Full Stack Software Engineer passionate about creating innovative solutions 
            with AI and cloud technologies.
          </p>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Gopal Reddy K A. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
