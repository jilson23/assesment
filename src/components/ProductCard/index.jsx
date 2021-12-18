const ProductCard = ({ titulo, image }) => {
  return (
    <div className="ProductCard">
      <img src={image} alt="" />
      <h2>{titulo}</h2>
    </div>
  );
};

export default ProductCard;
