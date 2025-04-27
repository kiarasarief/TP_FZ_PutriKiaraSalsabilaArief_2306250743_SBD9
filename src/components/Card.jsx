const Card = ({ title, body, image }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">{body}</p>
        <button className="mt-4 text-sm font-medium text-pastel-blue hover:text-dark-pastel-blue transition-colors duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
