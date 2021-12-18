import './style.css';
import PropTypes from 'prop-types';

const ProductCard = ({ title, image }) => {
  return (
    <div className="productCard">
      <div className="productCard__border">
        <img className="productCard__img" src={image} alt="" />
        <h2 className="productCard__title">{title}</h2>
        <div className="productCard__buttonCount">
          <span className="productCard__counter">00:00:00</span>
          <button className="productCard__button" type="button">
            Go to Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
