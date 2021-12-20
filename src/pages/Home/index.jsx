import { useEffect, useState } from 'react';
import './style.css';
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../services/products';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPruducts = async () => {
      const product = await getProducts();
      setProducts(product);
    };
    fetchPruducts();
  }, []);
  return (
    <div className="home">
      <h2 className="home__title">Products</h2>
      <div className="home_container">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
            />
          ))
        ) : (
          <h2>loading...</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
