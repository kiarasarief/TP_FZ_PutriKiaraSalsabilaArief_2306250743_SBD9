import { FaSpotify, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 py-8 mt-auto border-t border-gray-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold text-pastel-blue dark:text-light-pastel-blue">
              Kiara Salsabila
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              In my own little bubble.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://open.spotify.com/user/zh2f8tq9nz3vc8r0fbgt4wwcu?si=69754aa209064cee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pastel-blue dark:text-gray-400 dark:hover:text-light-pastel-blue transition-colors duration-300"
            >
              <span className="sr-only">Spotify</span>
              <FaSpotify className="h-6 w-6" />
            </a>

            <a
              href="https://www.instagram.com/kiarasarief/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pastel-blue dark:text-gray-400 dark:hover:text-light-pastel-blue transition-colors duration-300"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>

            <a
              href="https://github.com/kiarasarief"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pastel-blue dark:text-gray-400 dark:hover:text-light-pastel-blue transition-colors duration-300"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Putri Kiara Salsabila Arief (TP SBD Modul 9)
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-pastel-blue dark:text-gray-400 dark:hover:text-light-pastel-blue"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-pastel-blue dark:text-gray-400 dark:hover:text-light-pastel-blue"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-pastel-blue dark:text-gray-400 dark:hover:text-light-pastel-blue"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
