export const getProducts = async () => {
        const url = "https://front-test-api.herokuapp.com/api/product";
        const resp = await fetch(url);
        const data = await resp.json();
      
        const products = data.map(product =>({
          id: product.id,
          img: product.imgUrl,
          brand: product.brand,
          model: product.model,
          price: product.price,
      
        }));
        console.log(products);
        return products;
    }