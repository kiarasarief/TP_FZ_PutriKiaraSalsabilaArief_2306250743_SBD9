const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pastel-blue to-light-pastel-blue dark:from-gray-800 dark:to-gray-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold sm:text-4xl mb-4">
            Welcome to My Personal Space
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Explore my thoughts, ideas, and creations in this minimalist yet
            elegant space designed just for you.
          </p>
          <div className="mt-8">
            <a
              href="#articles"
              className="inline-block bg-white dark:bg-gray-900 text-pastel-blue dark:text-light-pastel-blue font-medium px-6 py-3 rounded-lg hover:bg-cream dark:hover:bg-gray-800 transition-colors duration-300"
            >
              Explore Articles
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
