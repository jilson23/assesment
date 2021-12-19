import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsId } from '../../services/products';

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
      <h3>hola{products.title}</h3>
      {products.id}
      {products.price}
      {products.description}
      {products.category}
      {products.image}
      {products.rating?.rate}
      {products.rating?.count}
    </div>
  );
};
export default Productdetail;
