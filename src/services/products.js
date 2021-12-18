const url = 'https://fakestoreapi.com/';

const getProducts = async () => {
  try {
    const res = await fetch(`${url}/products`);
    const data = await res.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};

export default getProducts;

export const getProductsId = async (id) => {
  try {
    const res = await fetch(`${url}/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};
