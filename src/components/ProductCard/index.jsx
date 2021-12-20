/* eslint-disable */
import './style.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

const ProductCard = ({ title, image, id }) => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [time, setTime] = useState(random(5, 80));

  let intervalRef = useRef();
  const decreaseNum = () => setTime((prev) => prev - 1);

  const secondsToString = (seconds) => {
    let hour = Math.floor(seconds / 3600);
    hour = hour < 10 ? '0' + hour : hour;
    let minute = Math.floor((seconds / 60) % 60);
    minute = minute < 10 ? '0' + minute : minute;
    let second = seconds % 60;
    second = second < 10 ? '0' + second : second;
    return hour + ':' + minute + ':' + second;
  };

  useEffect(() => {
    if (time > 0) {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [time]);

  return (
    <div className="productCard">
      <div className="productCard__border">
        <div className="productCard__body">
          <img className="productCard__img" src={image} alt="" />
          <h3 className="productCard__title">{title}</h3>
        </div>
        <div className="productCard__footer">
          {/* <span className="productCard__counter">00:00:00</span> */}
          <span className="productCard__counter">{secondsToString(time)}</span>
          {time > 0 ? (
            <Link className="productCard__link" to={`/productdetail/${id}`}>
              Go to Details
            </Link>
          ) : (
            <Link className="productCard__link--disable" to="/#">
              Go to Details
            </Link>
          )}
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
