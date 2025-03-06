import { Link } from "react-router-dom";
import ModelViewer from "../components/ModelViewer"; // Ensure this path is correct

const products = [
  { id: 1, name: "Product 1", modelUrl: "/models/model1.stl" },
  { id: 2, name: "Product 2", modelUrl: "/models/model2.stl" },
  { id: 3, name: "Product 3", modelUrl: "/models/model3.stl" },
  { id: 4, name: "Product 4", modelUrl: "/models/model4.stl" },
  { id: 5, name: "Product 5", modelUrl: "/models/model5.stl" },
];

export default function HomePage() {
  return (
    <div className="centered-page">
      <h1>Welcome to Our 3D Model Marketplace</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <ModelViewer modelUrl={product.modelUrl} />
            <Link to={`/product/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
