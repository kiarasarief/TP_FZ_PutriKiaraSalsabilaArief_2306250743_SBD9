import { useState } from "react";

const Card = ({ title, body, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="card group dark:bg-gray-800 dark:shadow-gray-700/20">
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5 bg-white dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {body}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 text-sm font-medium text-pastel-blue hover:text-dark-pastel-blue dark:text-light-pastel-blue dark:hover:text-pastel-blue transition-colors duration-300"
          >
            Read More
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="relative h-64 mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-line">
                {body}
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-pastel-blue hover:bg-dark-pastel-blue text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
