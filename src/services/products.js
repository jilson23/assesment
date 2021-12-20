const url = 'https://fakestoreapi.com/';

export const getProducts = async () => {
  try {
    const res = await fetch(`${url}/products`);
    const data = await res.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const getProductsId = async (id) => {
  try {
    const res = await fetch(`${url}/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};
