import { useEffect, useState } from "react";
import Card from "./components/Card";
import PageNumber from "./components/PageNumber";
import "./index.css";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function App() {
  const { products, pageNumber } = useContext(AppContext);
  let start = Math.ceil(pageNumber*10); 
  const paginatedProducts = products.slice(start, start+10);
  return (
    <div className="App">
      <PageNumber size={products.length / 10} />
      <h1 className="page">Page number: {pageNumber+1}</h1>
      <div className="card-container">
        {paginatedProducts.map((product) => (
          <Card key={product.id} title={product.title} img={product.images} />
        ))}
      </div>
    </div>
  );
}
