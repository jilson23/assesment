import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsId } from '../../services/products';
import './style.css';

const Productdetail = () => {
  const [products, setProducts] = useState([]);

  const params = useParams();
  useEffect(() => {
    const fetchPruducts = async () => {
      const product = await getProductsId(params.id);
      setProducts(product);
    };
    fetchPruducts();
  }, []);
  return (
    <div className="productDetail">
      <div className="productDetail__containerImage">
        <img className="productDetail__image" src={products.image} alt="" />
      </div>
      <div className="productDetail__info">
        <h2 className="productDetail__title">
          {products.title}, <small>Id: {products.id}</small>
        </h2>
        <p>
          <b>Description: </b>
          {products.description}
        </p>
        <p>
          <b>Price: </b>
          {products.price}
        </p>
        <p>
          <b>Category: </b>
          {products.category}
        </p>
        <p>
          <b>Rate: </b>
          {products.rating?.rate}
        </p>
        <p>
          <b>Count: </b>
          {products.rating?.count}
        </p>
      </div>
    </div>
  );
};
export default Productdetail;
