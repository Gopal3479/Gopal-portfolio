
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-4">
            <img
              src="/images/logo.png"
              alt="Gopal Reddy K A Logo"
              className="mx-auto h-12 w-auto"
            />
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Associate Software Engineer passionate about creating innovative solutions 
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
