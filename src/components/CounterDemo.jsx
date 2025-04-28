import { useState, useEffect } from "react";

const CounterDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10!`);
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-light-cream to-cream dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
          {/* Decorative stars */}
          <div className="absolute top-4 left-4 text-pastel-blue opacity-50 text-4xl">
            ✧
          </div>
          <div className="absolute bottom-4 right-4 text-light-pastel-blue opacity-50 text-4xl">
            ✧
          </div>
          <div className="absolute top-1/2 right-8 text-pastel-blue opacity-30 text-2xl">
            ✧
          </div>
          <div className="absolute top-1/3 left-12 text-light-pastel-blue opacity-30 text-2xl">
            ✧
          </div>

          <h1 className="text-4xl font-bold text-pastel-blue dark:text-light-pastel-blue mb-8">
            Counter Demo
          </h1>

          <div className="text-8xl font-bold text-gray-800 dark:text-gray-100 mb-12">
            {count}
          </div>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => setCount(count - 1)}
              className="w-16 h-16 text-2xl bg-pastel-blue hover:bg-dark-pastel-blue text-white rounded-full transition-all duration-300 hover:shadow-lg"
            >
              -
            </button>
            <button
              onClick={() => setCount(0)}
              className="w-24 bg-light-pastel-blue hover:bg-pastel-blue text-white rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="w-16 h-16 text-2xl bg-pastel-blue hover:bg-dark-pastel-blue text-white rounded-full transition-all duration-300 hover:shadow-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterDemo;
