import { useParams, Link } from "react-router-dom";

export default function CategoryPage() {
  const { categoryId } = useParams();

  const categories = {
    1: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ],
    2: [
      { id: 3, name: "Product 3" },
      { id: 4, name: "Product 4" },
    ],
  };

  const products = categories[categoryId] || [];

  return (
    <div className="centered-page">
      <h1>Category {categoryId}</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <Link to={`/product/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
