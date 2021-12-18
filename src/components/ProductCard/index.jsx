import PropTypes from 'prop-types';

const ProductCard = ({ title, image }) => {
  return (
    <div className="ProductCard">
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
