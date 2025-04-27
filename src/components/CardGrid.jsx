import Card from "./Card";

const CardGrid = ({ articles }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
        Featured Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            body={article.body}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
