import { useParams, Link } from "react-router-dom";
import ModelViewer from "../components/ModelViewer"; // Ensure this path is correct

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
    <div className="product-list">
  {products.map((product) => (
    <div key={product.id} className="product-card">
      <h2>{product.name}</h2>
      <ModelViewer modelUrl={`/models/model${product.id}.stl`} />
      <Link to={`/product/${product.id}`}>View Product</Link>
    </div>
  ))}
</div>

  );
}

