import { useParams } from "react-router-dom";
import ModelViewer from "../components/ModelViewer";

export default function ProductPage() {
  const { id } = useParams(); // Extract product ID from the URL

  // Define model URLs based on the product ID
  const modelUrls = {
    1: "/models/model1.stl",
    2: "/models/model2.stl",
    3: "/models/model3.stl",
    4: "/models/model4.stl",
    5: "/models/model5.stl",
  };

  const modelUrl = modelUrls[id];

  if (!modelUrl) {
    return <div className="centered-page"><h1>Model not found</h1></div>;
  }

  return (
    <div className="centered-page"> {/* Center everything */}
      <h1>Product {id}</h1>
      <ModelViewer modelUrl={modelUrl} />
    </div>
  );
}
