import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Product.css";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  });

  async function fetchProduct() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  if (error) {
    return (
      <main className="offers">
        <h3 className="advertise">Error: {error}</h3>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="offers">
        <h3 className="advertise">Carregando...</h3>
      </main>
    );
  }

  return (
    <main>
      {product && (
        <div className="product-page">
          <img src={product.image} alt={product.title} />
          <div className="item-info">
            <h4>{product.title}</h4>
            <p className="price">por R$ {product.price}</p>
            <p className="other-price">
              ou em 10x de {(product.price / 10).toFixed(2)}
            </p>
            <button type="submit" className="btn-buy">
              Comprar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
