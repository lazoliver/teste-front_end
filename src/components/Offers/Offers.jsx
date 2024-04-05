import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Offers.css";

export default function Offers() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products data");
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  if (error) {
    return (
      <section className="offers">
        <h3 className="advertise">Error: {error}</h3>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="offers">
        <h3 className="advertise">Carregando...</h3>
      </section>
    );
  }

  return (
    <section className="offers">
      <h2>Super Ofertas</h2>
      <div className="products">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="item-card"
            id={product.id}
          >
            <img src={product.image} alt={product.title} />
            <div className="item-info">
              <h4>{product.title}</h4>
              <p className="price">por R$ {product.price}</p>
              <p className="other-price">
                ou em 10x de {(product.price / 10).toFixed(2)}
              </p>
              <p className="btn-buy">Comprar</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
