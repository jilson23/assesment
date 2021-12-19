import './style.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, image, id }) => {
  return (
    <div className="productCard">
      <div className="productCard__border">
        <div className="productCard__body">
          <img className="productCard__img" src={image} alt="" />
          <h3 className="productCard__title">{title}</h3>
        </div>
        <div className="productCard__footer">
          <span className="productCard__counter">00:00:00</span>
          <Link className="productCard__link" to={`/productdetail/${id}`}>
            Go to Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
